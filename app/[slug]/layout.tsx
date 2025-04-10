import React from 'react';
import Sidebar from '@/components/Sidebar';

export default function PostsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col md:flex-row">
        <aside className="w-full md:w-1/4 pr-0 md:pr-4 mb-6 md:mb-0">
          <Sidebar />
        </aside>
        <main className="w-full md:w-3/4">
          {children}
        </main>
      </div>
    </div>
  );
} 