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

// 制作実例の詳細を取得する型定義
type WorkDetail = {
  title: string;
  content: string;
  featuredImage: {
    node: {
      sourceUrl: string;
      altText?: string;
    };
  } | null;
};

type WorkDetailResponse = {
  post: WorkDetail;
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

export async function getWorksPosts() {
  const query = `
    query WorksPosts {
      posts(where: {categoryName: "works"}, first: 6) {
        nodes {
          id
          title
          excerpt
          slug
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://attgaia.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const { data } = await response.json();
    return data.posts.nodes;
  } catch (error) {
    console.error('Error fetching works posts:', error);
    return [];
  }
}

export const getWorkBySlug = async (slug: string): Promise<WorkDetail | null> => {
  const query = gql`
    query GetWorkBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        title
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  `;

  try {
    const data: WorkDetailResponse = await graphQLClient.request(query, { slug });
    return data.post;
  } catch (error) {
    console.error('Error fetching work:', error);
    return null;
  }
};
