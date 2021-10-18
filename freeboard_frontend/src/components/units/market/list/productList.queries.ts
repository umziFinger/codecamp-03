import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($page: Int) {
    fetchUseditems(page: $page) {
      _id
      name
      remarks
      tags
      pickedCount
      price
      seller {
        name
      }
      images
      buyer {
        name
      }
    }
  }
`;

export const FETCH_USED_ITEMS_OF_THE_BEST = gql`
  query {
    fetchUseditemsOfTheBest {
      _id
      images
      name
      remarks
      price
      buyer {
        name
      }
      pickedCount
    }
  }
`;
