package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/VoroshilovMax/mars/testutil/keeper"
	"github.com/VoroshilovMax/mars/x/mars/types"
)

func TestCreatePubEventsQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.MarsKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNCreatePubEvents(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetCreatePubEventsRequest
		response *types.QueryGetCreatePubEventsResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetCreatePubEventsRequest{Id: msgs[0].Id},
			response: &types.QueryGetCreatePubEventsResponse{CreatePubEvents: msgs[0]},
		},
		{
			desc:     "Second",
			request:  &types.QueryGetCreatePubEventsRequest{Id: msgs[1].Id},
			response: &types.QueryGetCreatePubEventsResponse{CreatePubEvents: msgs[1]},
		},
		{
			desc:    "KeyNotFound",
			request: &types.QueryGetCreatePubEventsRequest{Id: uint64(len(msgs))},
			err:     sdkerrors.ErrKeyNotFound,
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.CreatePubEvents(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t, tc.response, response)
			}
		})
	}
}

func TestCreatePubEventsQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.MarsKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNCreatePubEvents(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllCreatePubEventsRequest {
		return &types.QueryAllCreatePubEventsRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.CreatePubEventsAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.CreatePubEvents), step)
			require.Subset(t, msgs, resp.CreatePubEvents)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.CreatePubEventsAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.CreatePubEvents), step)
			require.Subset(t, msgs, resp.CreatePubEvents)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.CreatePubEventsAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.CreatePubEventsAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
