package cli

import (
	"strconv"

	"github.com/spf13/cobra"

	"github.com/VoroshilovMax/mars/x/mars/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
)

func CmdCreateCreatePrivEvents() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-create-priv-events [priv-id] [question] [answers] [winner] [loser]",
		Short: "Create a new createPrivEvents",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argPrivId := args[0]
			argQuestion := args[1]
			argAnswers := args[2]
			argWinner := args[3]
			argLoser := args[4]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateCreatePrivEvents(clientCtx.GetFromAddress().String(), argPrivId, argQuestion, argAnswers, argWinner, argLoser)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateCreatePrivEvents() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-create-priv-events [id] [priv-id] [question] [answers] [winner] [loser]",
		Short: "Update a createPrivEvents",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argPrivId := args[1]

			argQuestion := args[2]

			argAnswers := args[3]

			argWinner := args[4]

			argLoser := args[5]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateCreatePrivEvents(clientCtx.GetFromAddress().String(), id, argPrivId, argQuestion, argAnswers, argWinner, argLoser)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteCreatePrivEvents() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-create-priv-events [id]",
		Short: "Delete a createPrivEvents by id",
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

			msg := types.NewMsgDeleteCreatePrivEvents(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
