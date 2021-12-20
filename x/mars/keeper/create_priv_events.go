package keeper

import (
	"encoding/binary"

	"github.com/VoroshilovMax/mars/x/mars/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetCreatePrivEventsCount get the total number of createPrivEvents
func (k Keeper) GetCreatePrivEventsCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.CreatePrivEventsCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetCreatePrivEventsCount set the total number of createPrivEvents
func (k Keeper) SetCreatePrivEventsCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.CreatePrivEventsCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendCreatePrivEvents appends a createPrivEvents in the store with a new id and update the count
func (k Keeper) AppendCreatePrivEvents(
	ctx sdk.Context,
	createPrivEvents types.CreatePrivEvents,
) uint64 {
	// Create the createPrivEvents
	count := k.GetCreatePrivEventsCount(ctx)

	// Set the ID of the appended value
	createPrivEvents.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreatePrivEventsKey))
	appendedValue := k.cdc.MustMarshal(&createPrivEvents)
	store.Set(GetCreatePrivEventsIDBytes(createPrivEvents.Id), appendedValue)

	// Update createPrivEvents count
	k.SetCreatePrivEventsCount(ctx, count+1)

	return count
}

// SetCreatePrivEvents set a specific createPrivEvents in the store
func (k Keeper) SetCreatePrivEvents(ctx sdk.Context, createPrivEvents types.CreatePrivEvents) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreatePrivEventsKey))
	b := k.cdc.MustMarshal(&createPrivEvents)
	store.Set(GetCreatePrivEventsIDBytes(createPrivEvents.Id), b)
}

// GetCreatePrivEvents returns a createPrivEvents from its id
func (k Keeper) GetCreatePrivEvents(ctx sdk.Context, id uint64) (val types.CreatePrivEvents, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreatePrivEventsKey))
	b := store.Get(GetCreatePrivEventsIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveCreatePrivEvents removes a createPrivEvents from the store
func (k Keeper) RemoveCreatePrivEvents(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreatePrivEventsKey))
	store.Delete(GetCreatePrivEventsIDBytes(id))
}

// GetAllCreatePrivEvents returns all createPrivEvents
func (k Keeper) GetAllCreatePrivEvents(ctx sdk.Context) (list []types.CreatePrivEvents) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreatePrivEventsKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.CreatePrivEvents
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetCreatePrivEventsIDBytes returns the byte representation of the ID
func GetCreatePrivEventsIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetCreatePrivEventsIDFromBytes returns ID in uint64 format from a byte array
func GetCreatePrivEventsIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
