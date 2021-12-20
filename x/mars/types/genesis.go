package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		CreatePrivEventsList: []CreatePrivEvents{},
		CreatePubEventsList:  []CreatePubEvents{},
		// this line is used by starport scaffolding # genesis/types/default
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated ID in createPrivEvents
	createPrivEventsIdMap := make(map[uint64]bool)
	createPrivEventsCount := gs.GetCreatePrivEventsCount()
	for _, elem := range gs.CreatePrivEventsList {
		if _, ok := createPrivEventsIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for createPrivEvents")
		}
		if elem.Id >= createPrivEventsCount {
			return fmt.Errorf("createPrivEvents id should be lower or equal than the last id")
		}
		createPrivEventsIdMap[elem.Id] = true
	}
	// Check for duplicated ID in createPubEvents
	createPubEventsIdMap := make(map[uint64]bool)
	createPubEventsCount := gs.GetCreatePubEventsCount()
	for _, elem := range gs.CreatePubEventsList {
		if _, ok := createPubEventsIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for createPubEvents")
		}
		if elem.Id >= createPubEventsCount {
			return fmt.Errorf("createPubEvents id should be lower or equal than the last id")
		}
		createPubEventsIdMap[elem.Id] = true
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return nil
}
