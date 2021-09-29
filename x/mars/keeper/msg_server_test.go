package keeper_test

import (
	"context"
	"testing"

	keepertest "github.com/VoroshilovMax/mars/testutil/keeper"
	"github.com/VoroshilovMax/mars/x/mars/keeper"
	"github.com/VoroshilovMax/mars/x/mars/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.MarsKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
