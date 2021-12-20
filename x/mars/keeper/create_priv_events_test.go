package keeper_test

import (
	"testing"

	keepertest "github.com/VoroshilovMax/mars/testutil/keeper"
	"github.com/VoroshilovMax/mars/x/mars/keeper"
	"github.com/VoroshilovMax/mars/x/mars/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

func createNCreatePrivEvents(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.CreatePrivEvents {
	items := make([]types.CreatePrivEvents, n)
	for i := range items {
		items[i].Id = keeper.AppendCreatePrivEvents(ctx, items[i])
	}
	return items
}

func TestCreatePrivEventsGet(t *testing.T) {
	keeper, ctx := keepertest.MarsKeeper(t)
	items := createNCreatePrivEvents(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetCreatePrivEvents(ctx, item.Id)
		require.True(t, found)
		require.Equal(t, item, got)
	}
}

func TestCreatePrivEventsRemove(t *testing.T) {
	keeper, ctx := keepertest.MarsKeeper(t)
	items := createNCreatePrivEvents(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveCreatePrivEvents(ctx, item.Id)
		_, found := keeper.GetCreatePrivEvents(ctx, item.Id)
		require.False(t, found)
	}
}

func TestCreatePrivEventsGetAll(t *testing.T) {
	keeper, ctx := keepertest.MarsKeeper(t)
	items := createNCreatePrivEvents(keeper, ctx, 10)
	require.ElementsMatch(t, items, keeper.GetAllCreatePrivEvents(ctx))
}

func TestCreatePrivEventsCount(t *testing.T) {
	keeper, ctx := keepertest.MarsKeeper(t)
	items := createNCreatePrivEvents(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetCreatePrivEventsCount(ctx))
}
