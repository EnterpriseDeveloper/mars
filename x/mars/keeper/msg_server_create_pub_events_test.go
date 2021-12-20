package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"github.com/VoroshilovMax/mars/x/mars/types"
)

func TestCreatePubEventsMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateCreatePubEvents(ctx, &types.MsgCreateCreatePubEvents{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestCreatePubEventsMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateCreatePubEvents
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateCreatePubEvents{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateCreatePubEvents{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateCreatePubEvents{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateCreatePubEvents(ctx, &types.MsgCreateCreatePubEvents{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateCreatePubEvents(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestCreatePubEventsMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteCreatePubEvents
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteCreatePubEvents{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteCreatePubEvents{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteCreatePubEvents{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateCreatePubEvents(ctx, &types.MsgCreateCreatePubEvents{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteCreatePubEvents(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
