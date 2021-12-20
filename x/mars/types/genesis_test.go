package types_test

import (
	"testing"

	"github.com/VoroshilovMax/mars/x/mars/types"
	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{
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
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated createPrivEvents",
			genState: &types.GenesisState{
				CreatePrivEventsList: []types.CreatePrivEvents{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid createPrivEvents count",
			genState: &types.GenesisState{
				CreatePrivEventsList: []types.CreatePrivEvents{
					{
						Id: 1,
					},
				},
				CreatePrivEventsCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated createPubEvents",
			genState: &types.GenesisState{
				CreatePubEventsList: []types.CreatePubEvents{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid createPubEvents count",
			genState: &types.GenesisState{
				CreatePubEventsList: []types.CreatePubEvents{
					{
						Id: 1,
					},
				},
				CreatePubEventsCount: 0,
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
