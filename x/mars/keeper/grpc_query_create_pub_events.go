package keeper

import (
	"context"

	"github.com/VoroshilovMax/mars/x/mars/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) CreatePubEventsAll(c context.Context, req *types.QueryAllCreatePubEventsRequest) (*types.QueryAllCreatePubEventsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var createPubEventss []types.CreatePubEvents
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	createPubEventsStore := prefix.NewStore(store, types.KeyPrefix(types.CreatePubEventsKey))

	pageRes, err := query.Paginate(createPubEventsStore, req.Pagination, func(key []byte, value []byte) error {
		var createPubEvents types.CreatePubEvents
		if err := k.cdc.Unmarshal(value, &createPubEvents); err != nil {
			return err
		}

		createPubEventss = append(createPubEventss, createPubEvents)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllCreatePubEventsResponse{CreatePubEvents: createPubEventss, Pagination: pageRes}, nil
}

func (k Keeper) CreatePubEvents(c context.Context, req *types.QueryGetCreatePubEventsRequest) (*types.QueryGetCreatePubEventsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	createPubEvents, found := k.GetCreatePubEvents(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetCreatePubEventsResponse{CreatePubEvents: createPubEvents}, nil
}
