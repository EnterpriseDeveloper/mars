package keeper_test

import (
	"testing"

	keepertest "github.com/VoroshilovMax/mars/testutil/keeper"
	"github.com/VoroshilovMax/mars/x/mars/keeper"
	"github.com/VoroshilovMax/mars/x/mars/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

func createNCreatePubEvents(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.CreatePubEvents {
	items := make([]types.CreatePubEvents, n)
	for i := range items {
		items[i].Id = keeper.AppendCreatePubEvents(ctx, items[i])
	}
	return items
}

func TestCreatePubEventsGet(t *testing.T) {
	keeper, ctx := keepertest.MarsKeeper(t)
	items := createNCreatePubEvents(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetCreatePubEvents(ctx, item.Id)
		require.True(t, found)
		require.Equal(t, item, got)
	}
}

func TestCreatePubEventsRemove(t *testing.T) {
	keeper, ctx := keepertest.MarsKeeper(t)
	items := createNCreatePubEvents(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveCreatePubEvents(ctx, item.Id)
		_, found := keeper.GetCreatePubEvents(ctx, item.Id)
		require.False(t, found)
	}
}

func TestCreatePubEventsGetAll(t *testing.T) {
	keeper, ctx := keepertest.MarsKeeper(t)
	items := createNCreatePubEvents(keeper, ctx, 10)
	require.ElementsMatch(t, items, keeper.GetAllCreatePubEvents(ctx))
}

func TestCreatePubEventsCount(t *testing.T) {
	keeper, ctx := keepertest.MarsKeeper(t)
	items := createNCreatePubEvents(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetCreatePubEventsCount(ctx))
}
