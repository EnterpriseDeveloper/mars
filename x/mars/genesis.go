package mars

import (
	"github.com/VoroshilovMax/mars/x/mars/keeper"
	"github.com/VoroshilovMax/mars/x/mars/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the createPrivEvents
	for _, elem := range genState.CreatePrivEventsList {
		k.SetCreatePrivEvents(ctx, elem)
	}

	// Set createPrivEvents count
	k.SetCreatePrivEventsCount(ctx, genState.CreatePrivEventsCount)
	// Set all the createPubEvents
	for _, elem := range genState.CreatePubEventsList {
		k.SetCreatePubEvents(ctx, elem)
	}

	// Set createPubEvents count
	k.SetCreatePubEventsCount(ctx, genState.CreatePubEventsCount)
	// this line is used by starport scaffolding # genesis/module/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	genesis.CreatePrivEventsList = k.GetAllCreatePrivEvents(ctx)
	genesis.CreatePrivEventsCount = k.GetCreatePrivEventsCount(ctx)
	genesis.CreatePubEventsList = k.GetAllCreatePubEvents(ctx)
	genesis.CreatePubEventsCount = k.GetCreatePubEventsCount(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
