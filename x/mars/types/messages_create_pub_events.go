package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateCreatePubEvents{}

func NewMsgCreateCreatePubEvents(creator string, pubId string, question string, answers string, premAmount string, startTime string, endTime string, expertAmount string) *MsgCreateCreatePubEvents {
	return &MsgCreateCreatePubEvents{
		Creator:      creator,
		PubId:        pubId,
		Question:     question,
		Answers:      answers,
		PremAmount:   premAmount,
		StartTime:    startTime,
		EndTime:      endTime,
		ExpertAmount: expertAmount,
	}
}

func (msg *MsgCreateCreatePubEvents) Route() string {
	return RouterKey
}

func (msg *MsgCreateCreatePubEvents) Type() string {
	return "CreateCreatePubEvents"
}

func (msg *MsgCreateCreatePubEvents) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateCreatePubEvents) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateCreatePubEvents) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateCreatePubEvents{}

func NewMsgUpdateCreatePubEvents(creator string, id uint64, pubId string, question string, answers string, premAmount string, startTime string, endTime string, expertAmount string) *MsgUpdateCreatePubEvents {
	return &MsgUpdateCreatePubEvents{
		Id:           id,
		Creator:      creator,
		PubId:        pubId,
		Question:     question,
		Answers:      answers,
		PremAmount:   premAmount,
		StartTime:    startTime,
		EndTime:      endTime,
		ExpertAmount: expertAmount,
	}
}

func (msg *MsgUpdateCreatePubEvents) Route() string {
	return RouterKey
}

func (msg *MsgUpdateCreatePubEvents) Type() string {
	return "UpdateCreatePubEvents"
}

func (msg *MsgUpdateCreatePubEvents) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateCreatePubEvents) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateCreatePubEvents) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteCreatePubEvents{}

func NewMsgDeleteCreatePubEvents(creator string, id uint64) *MsgDeleteCreatePubEvents {
	return &MsgDeleteCreatePubEvents{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteCreatePubEvents) Route() string {
	return RouterKey
}

func (msg *MsgDeleteCreatePubEvents) Type() string {
	return "DeleteCreatePubEvents"
}

func (msg *MsgDeleteCreatePubEvents) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteCreatePubEvents) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteCreatePubEvents) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
