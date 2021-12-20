package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreateCreatePrivEvents{}, "mars/CreateCreatePrivEvents", nil)
	cdc.RegisterConcrete(&MsgUpdateCreatePrivEvents{}, "mars/UpdateCreatePrivEvents", nil)
	cdc.RegisterConcrete(&MsgDeleteCreatePrivEvents{}, "mars/DeleteCreatePrivEvents", nil)
	cdc.RegisterConcrete(&MsgCreateCreatePubEvents{}, "mars/CreateCreatePubEvents", nil)
	cdc.RegisterConcrete(&MsgUpdateCreatePubEvents{}, "mars/UpdateCreatePubEvents", nil)
	cdc.RegisterConcrete(&MsgDeleteCreatePubEvents{}, "mars/DeleteCreatePubEvents", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateCreatePrivEvents{},
		&MsgUpdateCreatePrivEvents{},
		&MsgDeleteCreatePrivEvents{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateCreatePubEvents{},
		&MsgUpdateCreatePubEvents{},
		&MsgDeleteCreatePubEvents{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
