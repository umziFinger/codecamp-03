import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems {
    fetchUseditems {
      _id
      name
      remarks
      tags
      pickedCount
      price
      seller {
        name
      }
    }
  }
`;
