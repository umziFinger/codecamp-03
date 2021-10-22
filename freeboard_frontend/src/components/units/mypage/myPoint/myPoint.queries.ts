import { gql } from "@apollo/client";

export const FETCH_POINT_TRANSACTIONS = gql`
  query {
    fetchPointTransactions {
      amount
      useditem {
        name
      }
      createdAt
      balance
      status
    }
  }
`;
