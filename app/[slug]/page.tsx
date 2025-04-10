import React from 'react';

export default async function PostDetail({ params }) {
  const { slug } = params;
  const response = await fetch(`https://attgaia.com/wp-json/wp/v2/posts?slug=${slug}&_embed`, { cache: 'no-store' });
  const data = await response.json();
  const post = data[0];

  if (!post) return <div className="container mx-auto py-16">記事が見つかりませんでした。</div>;

  return (
    <article className="prose max-w-none">
      <h1 className="text-3xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      {post._embedded['wp:featuredmedia'] && (
        <img
          src={post._embedded['wp:featuredmedia'][0].source_url}
          alt={post.title.rendered}
          className="w-full h-auto mb-4"
        />
      )}
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </article>
  );
} 