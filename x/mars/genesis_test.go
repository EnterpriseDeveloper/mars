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
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.MarsKeeper(t)
	mars.InitGenesis(ctx, *k, genesisState)
	got := mars.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	// this line is used by starport scaffolding # genesis/test/assert
}
