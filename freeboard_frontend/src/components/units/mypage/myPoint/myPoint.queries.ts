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

export const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
      userPoint {
        amount
      }
    }
  }
`;
