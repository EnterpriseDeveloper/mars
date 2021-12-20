package cli

import (
	"context"
	"strconv"

	"github.com/VoroshilovMax/mars/x/mars/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

func CmdListCreatePubEvents() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-create-pub-events",
		Short: "list all createPubEvents",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllCreatePubEventsRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.CreatePubEventsAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowCreatePubEvents() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-create-pub-events [id]",
		Short: "shows a createPubEvents",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			params := &types.QueryGetCreatePubEventsRequest{
				Id: id,
			}

			res, err := queryClient.CreatePubEvents(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
