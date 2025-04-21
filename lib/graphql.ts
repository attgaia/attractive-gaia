import { GraphQLClient, gql } from 'graphql-request';

const endpoint = 'https://attgaia.com/graphql';
const graphQLClient = new GraphQLClient(endpoint);

// ✅ データの型を定義
type Post = {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  author: {
    node: {
      name: string;
      avatar: {
        url: string;
      } | null;
    };
  };
  categories: {
    nodes: {
      name: string;
    }[];
  };
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  } | null;
};

type AllPostsResponse = {
  posts: {
    nodes: Post[];
  };
};

type PostDetail = {
  id: string;
  title: string;
  slug: string;
  date: string;
  content: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  } | null;
};

type PostDetailResponse = {
  post: PostDetail;
};

type Category = {
  id: string;
  name: string;
  slug: string;
  count: number;
};

type CategoriesResponse = {
  categories: {
    nodes: Category[];
  };
};

export const getPosts = async (): Promise<Post[]> => {
  const query = gql`
    query GetPosts {
      posts {
        nodes {
          id
          title
          slug
          date
          excerpt
          author {
            node {
              name
              avatar {
                url
              }
            }
          }
          categories {
            nodes {
              name
            }
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `;

  const data: AllPostsResponse = await graphQLClient.request(query);
  return data.posts.nodes;
};

export const getPostBySlug = async (slug: string): Promise<PostDetail | null> => {
  const query = gql`
    query GetPostBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        id
        title
        slug
        date
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  `;

  try {
    const data: PostDetailResponse = await graphQLClient.request(query, { slug });
    return data.post;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
};

export const getCategories = async (): Promise<Category[]> => {
  const query = gql`
    query GetCategories {
      categories {
        nodes {
          id
          name
          slug
          count
        }
      }
    }
  `;

  try {
    const data: CategoriesResponse = await graphQLClient.request(query);
    return data.categories.nodes;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};
