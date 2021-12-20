package keeper

import (
	"encoding/binary"

	"github.com/VoroshilovMax/mars/x/mars/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetCreatePubEventsCount get the total number of createPubEvents
func (k Keeper) GetCreatePubEventsCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.CreatePubEventsCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetCreatePubEventsCount set the total number of createPubEvents
func (k Keeper) SetCreatePubEventsCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.CreatePubEventsCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendCreatePubEvents appends a createPubEvents in the store with a new id and update the count
func (k Keeper) AppendCreatePubEvents(
	ctx sdk.Context,
	createPubEvents types.CreatePubEvents,
) uint64 {
	// Create the createPubEvents
	count := k.GetCreatePubEventsCount(ctx)

	// Set the ID of the appended value
	createPubEvents.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreatePubEventsKey))
	appendedValue := k.cdc.MustMarshal(&createPubEvents)
	store.Set(GetCreatePubEventsIDBytes(createPubEvents.Id), appendedValue)

	// Update createPubEvents count
	k.SetCreatePubEventsCount(ctx, count+1)

	return count
}

// SetCreatePubEvents set a specific createPubEvents in the store
func (k Keeper) SetCreatePubEvents(ctx sdk.Context, createPubEvents types.CreatePubEvents) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreatePubEventsKey))
	b := k.cdc.MustMarshal(&createPubEvents)
	store.Set(GetCreatePubEventsIDBytes(createPubEvents.Id), b)
}

// GetCreatePubEvents returns a createPubEvents from its id
func (k Keeper) GetCreatePubEvents(ctx sdk.Context, id uint64) (val types.CreatePubEvents, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreatePubEventsKey))
	b := store.Get(GetCreatePubEventsIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveCreatePubEvents removes a createPubEvents from the store
func (k Keeper) RemoveCreatePubEvents(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreatePubEventsKey))
	store.Delete(GetCreatePubEventsIDBytes(id))
}

// GetAllCreatePubEvents returns all createPubEvents
func (k Keeper) GetAllCreatePubEvents(ctx sdk.Context) (list []types.CreatePubEvents) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreatePubEventsKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.CreatePubEvents
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetCreatePubEventsIDBytes returns the byte representation of the ID
func GetCreatePubEventsIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetCreatePubEventsIDFromBytes returns ID in uint64 format from a byte array
func GetCreatePubEventsIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
