import { GraphQLClient, gql } from 'graphql-request';

const endpoint = 'https://blog.attgaia.com/graphql';
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
  excerpt: string | null;
  categories: {
    nodes: {
      name: string;
      slug: string;
    }[];
  };
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
  // まず制作実例のスラッグを取得
  const worksQuery = gql`
    query GetWorksSlugs {
      posts(where: {categoryName: "works"}, first: 100) {
        nodes {
          slug
        }
      }
    }
  `;

  const worksData = await graphQLClient.request(worksQuery);
  const worksSlugs = worksData.posts.nodes.map(post => post.slug);

  // 記事を取得（制作実例のスラッグを除外）
  const query = gql`
    query GetPosts {
      posts(first: 100, where: {categoryNotIn: "works"}) {
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
              slug
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
  // 制作実例のスラッグと一致する記事を除外
  const filteredPosts = data.posts.nodes.filter(post => !worksSlugs.includes(post.slug));
  return filteredPosts;
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
        excerpt
        categories {
          nodes {
            name
            slug
          }
        }
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
      categories(first: 100) {
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

export async function getWorksPosts(limit?: number) {
  const query = gql`
    query WorksPosts($first: Int) {
      posts(where: {categoryName: "works"}, first: $first) {
        nodes {
          id
          title
          excerpt
          slug
          date
          categories {
            nodes {
              name
              slug
            }
          }
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
    const data = await graphQLClient.request(query, { first: limit || 100 });
    // 日付順（降順）でソート
    const sortedPosts = data.posts.nodes.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    return sortedPosts;
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
