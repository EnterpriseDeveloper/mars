package cli

import (
	"strconv"

	"github.com/spf13/cobra"

	"github.com/VoroshilovMax/mars/x/mars/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
)

func CmdCreateCreatePubEvents() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-create-pub-events [pub-id] [question] [answers] [prem-amount] [start-time] [end-time] [expert-amount]",
		Short: "Create a new createPubEvents",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argPubId := args[0]
			argQuestion := args[1]
			argAnswers := args[2]
			argPremAmount := args[3]
			argStartTime := args[4]
			argEndTime := args[5]
			argExpertAmount := args[6]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateCreatePubEvents(clientCtx.GetFromAddress().String(), argPubId, argQuestion, argAnswers, argPremAmount, argStartTime, argEndTime, argExpertAmount)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateCreatePubEvents() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-create-pub-events [id] [pub-id] [question] [answers] [prem-amount] [start-time] [end-time] [expert-amount]",
		Short: "Update a createPubEvents",
		Args:  cobra.ExactArgs(8),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argPubId := args[1]

			argQuestion := args[2]

			argAnswers := args[3]

			argPremAmount := args[4]

			argStartTime := args[5]

			argEndTime := args[6]

			argExpertAmount := args[7]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateCreatePubEvents(clientCtx.GetFromAddress().String(), id, argPubId, argQuestion, argAnswers, argPremAmount, argStartTime, argEndTime, argExpertAmount)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteCreatePubEvents() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-create-pub-events [id]",
		Short: "Delete a createPubEvents by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteCreatePubEvents(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
