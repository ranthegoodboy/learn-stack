import gql from "graphql-tag";

export const GET_VIDEOS = gql`
  query videos($skip: Float, $take: Float) {
    videos(skip: $skip, take: $take) {
      id
      slug
      title
      description
      url
      createdAt
      published
      author {
        id
        name
        avatar
      }
    }
    videoCount
  }
`;

export const GET_VIDEO = gql`
  query video($id: Int!) {
    video(id: $id) {
      id
      slug
      title
      description
      url
      createdAt
      published
      author {
        id
        name
        avatar
      }
    }
  }
`;
