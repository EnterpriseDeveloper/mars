package types

import (
	"testing"

	"github.com/VoroshilovMax/mars/testutil/sample"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
)

func TestMsgCreateCreatePrivEvents_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgCreateCreatePrivEvents
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgCreateCreatePrivEvents{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgCreateCreatePrivEvents{
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

func TestMsgUpdateCreatePrivEvents_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgUpdateCreatePrivEvents
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgUpdateCreatePrivEvents{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgUpdateCreatePrivEvents{
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

func TestMsgDeleteCreatePrivEvents_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgDeleteCreatePrivEvents
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgDeleteCreatePrivEvents{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgDeleteCreatePrivEvents{
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
