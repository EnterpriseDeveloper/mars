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

func (k Keeper) CreatePrivEventsAll(c context.Context, req *types.QueryAllCreatePrivEventsRequest) (*types.QueryAllCreatePrivEventsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var createPrivEventss []types.CreatePrivEvents
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	createPrivEventsStore := prefix.NewStore(store, types.KeyPrefix(types.CreatePrivEventsKey))

	pageRes, err := query.Paginate(createPrivEventsStore, req.Pagination, func(key []byte, value []byte) error {
		var createPrivEvents types.CreatePrivEvents
		if err := k.cdc.Unmarshal(value, &createPrivEvents); err != nil {
			return err
		}

		createPrivEventss = append(createPrivEventss, createPrivEvents)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllCreatePrivEventsResponse{CreatePrivEvents: createPrivEventss, Pagination: pageRes}, nil
}

func (k Keeper) CreatePrivEvents(c context.Context, req *types.QueryGetCreatePrivEventsRequest) (*types.QueryGetCreatePrivEventsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	createPrivEvents, found := k.GetCreatePrivEvents(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetCreatePrivEventsResponse{CreatePrivEvents: createPrivEvents}, nil
}
