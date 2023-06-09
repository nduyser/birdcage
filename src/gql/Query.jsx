import {gql} from "@apollo/client";

export const media = gql`
query MyQuery {
  schedules (orderBy: showDateAndTime_ASC) {
    artistName
    artistImage {
      url
    }
    showDateAndTime
  }
}
`