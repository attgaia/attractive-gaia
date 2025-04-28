'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function ArticleDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);
  const [author, setAuthor] = useState<any>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchPostAndAuthor() {
      try {
        const res = await fetch(`https://blog.attgaia.com/wp-json/wp/v2/posts?slug=${slug}&_embed`);
        const data = await res.json();

        if (data.length > 0) {
          const postData = data[0];
          setPost(postData);

          // 著者情報取得
          const authorRes = await fetch(`https://blog.attgaia.com/wp-json/wp/v2/users/${postData.author}`);
          const authorData = await authorRes.json();
          setAuthor(authorData);

          // 🔻関連記事の取得は一時停止（エラー防止のため）🔻
          // const relatedRes = await fetch(`https://blog.attgaia.com/wp-json/wp/v2/posts?author=${postData.author}&per_page=3`);
          // const relatedData = await relatedRes.json();
          // setRelatedPosts(relatedData.filter(p => p.id !== postData.id));
        }
      } catch (err) {
        console.error("取得エラー:", err);
      }
    }

    fetchPostAndAuthor();
  }, [slug]);

  if (!post) return <p>読み込み中...</p>;

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      
      {post._embedded?.['wp:featuredmedia'] && (
        <img
          src={post._embedded['wp:featuredmedia'][0].source_url}
          alt=""
          className="w-full h-auto rounded-lg mb-6"
        />
      )}

      <div className="prose prose-lg mb-8" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />

      {/* 著者情報 */}
      {author && (
        <div className="mt-12 p-4 border rounded-lg bg-gray-50">
          <div className="flex items-center gap-4 mb-2">
            <img src={author.avatar_urls['96']} alt={author.name} className="w-12 h-12 rounded-full" />
            <div>
              <p className="font-semibold">{author.name}</p>
              <p className="text-sm text-gray-600">{author.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* 🔻関連記事は今は非表示🔻 */}
      {/* {relatedPosts.length > 0 && (
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-4">同じ著者の他の記事</h3>
          <ul className="grid grid-cols-1 gap-4">
            {relatedPosts.map(rp => (
              <li key={rp.id} className="p-4 border rounded hover:shadow">
                <a href={`/posts/${rp.slug}`} className="text-lg font-semibold hover:underline" dangerouslySetInnerHTML={{ __html: rp.title.rendered }} />
              </li>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  );
}
