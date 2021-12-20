package keeper

import (
	"context"
	"fmt"

	"github.com/VoroshilovMax/mars/x/mars/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateCreatePubEvents(goCtx context.Context, msg *types.MsgCreateCreatePubEvents) (*types.MsgCreateCreatePubEventsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var createPubEvents = types.CreatePubEvents{
		Creator:      msg.Creator,
		PubId:        msg.PubId,
		Question:     msg.Question,
		Answers:      msg.Answers,
		PremAmount:   msg.PremAmount,
		StartTime:    msg.StartTime,
		EndTime:      msg.EndTime,
		ExpertAmount: msg.ExpertAmount,
	}

	id := k.AppendCreatePubEvents(
		ctx,
		createPubEvents,
	)

	return &types.MsgCreateCreatePubEventsResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateCreatePubEvents(goCtx context.Context, msg *types.MsgUpdateCreatePubEvents) (*types.MsgUpdateCreatePubEventsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var createPubEvents = types.CreatePubEvents{
		Creator:      msg.Creator,
		Id:           msg.Id,
		PubId:        msg.PubId,
		Question:     msg.Question,
		Answers:      msg.Answers,
		PremAmount:   msg.PremAmount,
		StartTime:    msg.StartTime,
		EndTime:      msg.EndTime,
		ExpertAmount: msg.ExpertAmount,
	}

	// Checks that the element exists
	val, found := k.GetCreatePubEvents(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetCreatePubEvents(ctx, createPubEvents)

	return &types.MsgUpdateCreatePubEventsResponse{}, nil
}

func (k msgServer) DeleteCreatePubEvents(goCtx context.Context, msg *types.MsgDeleteCreatePubEvents) (*types.MsgDeleteCreatePubEventsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetCreatePubEvents(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveCreatePubEvents(ctx, msg.Id)

	return &types.MsgDeleteCreatePubEventsResponse{}, nil
}
