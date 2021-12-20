package mars_test

import (
	"testing"

	keepertest "github.com/VoroshilovMax/mars/testutil/keeper"
	"github.com/VoroshilovMax/mars/x/mars"
	"github.com/VoroshilovMax/mars/x/mars/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		CreatePrivEventsList: []types.CreatePrivEvents{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		CreatePrivEventsCount: 2,
		CreatePubEventsList: []types.CreatePubEvents{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		CreatePubEventsCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.MarsKeeper(t)
	mars.InitGenesis(ctx, *k, genesisState)
	got := mars.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	require.Len(t, got.CreatePrivEventsList, len(genesisState.CreatePrivEventsList))
	require.Subset(t, genesisState.CreatePrivEventsList, got.CreatePrivEventsList)
	require.Equal(t, genesisState.CreatePrivEventsCount, got.CreatePrivEventsCount)
	require.Len(t, got.CreatePubEventsList, len(genesisState.CreatePubEventsList))
	require.Subset(t, genesisState.CreatePubEventsList, got.CreatePubEventsList)
	require.Equal(t, genesisState.CreatePubEventsCount, got.CreatePubEventsCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
