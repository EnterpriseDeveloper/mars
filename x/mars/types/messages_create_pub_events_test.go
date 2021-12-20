package types

import (
	"testing"

	"github.com/VoroshilovMax/mars/testutil/sample"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateCreatePubEvents_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateCreatePubEvents
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateCreatePubEvents{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateCreatePubEvents{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgUpdateCreatePubEvents_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateCreatePubEvents
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateCreatePubEvents{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateCreatePubEvents{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

func TestMsgDeleteCreatePubEvents_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteCreatePubEvents
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteCreatePubEvents{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteCreatePubEvents{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
