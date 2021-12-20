package keeper

import (
	"context"
	"fmt"

	"github.com/VoroshilovMax/mars/x/mars/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateCreatePrivEvents(goCtx context.Context, msg *types.MsgCreateCreatePrivEvents) (*types.MsgCreateCreatePrivEventsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var createPrivEvents = types.CreatePrivEvents{
		Creator:  msg.Creator,
		PrivId:   msg.PrivId,
		Question: msg.Question,
		Answers:  msg.Answers,
		Winner:   msg.Winner,
		Loser:    msg.Loser,
	}

	id := k.AppendCreatePrivEvents(
		ctx,
		createPrivEvents,
	)

	return &types.MsgCreateCreatePrivEventsResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateCreatePrivEvents(goCtx context.Context, msg *types.MsgUpdateCreatePrivEvents) (*types.MsgUpdateCreatePrivEventsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var createPrivEvents = types.CreatePrivEvents{
		Creator:  msg.Creator,
		Id:       msg.Id,
		PrivId:   msg.PrivId,
		Question: msg.Question,
		Answers:  msg.Answers,
		Winner:   msg.Winner,
		Loser:    msg.Loser,
	}

	// Checks that the element exists
	val, found := k.GetCreatePrivEvents(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetCreatePrivEvents(ctx, createPrivEvents)

	return &types.MsgUpdateCreatePrivEventsResponse{}, nil
}

func (k msgServer) DeleteCreatePrivEvents(goCtx context.Context, msg *types.MsgDeleteCreatePrivEvents) (*types.MsgDeleteCreatePrivEventsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetCreatePrivEvents(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveCreatePrivEvents(ctx, msg.Id)

	return &types.MsgDeleteCreatePrivEventsResponse{}, nil
}
