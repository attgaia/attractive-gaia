'use client';

import React, { useEffect, useState } from 'react';

export default function Sidebar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch('https://attgaia.com/wp-json/wp/v2/categories');
      const data = await response.json();
      setCategories(data);
    }
    fetchCategories();
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">カテゴリ一覧</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.id} className="text-sm">
            <a href={`#`} className="hover:text-emerald-600 transition-colors">
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
} 