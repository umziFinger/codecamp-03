import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS_I_SOLD = gql`
  query fetchUseditemsISold($page: Int) {
    fetchUseditemsISold(page: $page) {
      _id
      name
      remarks
      price
      createdAt
      buyer {
        name
      }
    }
  }
`;

export const FETCH_USED_ITEMS_I_PICKED = gql`
  query fetchUseditemsIPicked($search: String) {
    fetchUseditemsIPicked(search: $search) {
      _id
      name
      remarks
      price
      createdAt
      buyer {
        name
      }
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

export const FETCH_USED_ITEMS_COUNT_I_SOLD = gql`
  query {
    fetchUseditemsCountISold
  }
`;
