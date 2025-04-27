'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface WorksPaginationProps {
  totalWorks: number;
}

export default function WorksPagination({ totalWorks }: WorksPaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const worksPerPage = 9;
  const totalPages = Math.ceil(totalWorks / worksPerPage);

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center space-x-2">
      <Button
        variant="outline"
        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className="flex items-center border-[#008B8B] text-[#008B8B] hover:bg-[#008B8B]/5 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        前へ
      </Button>
      
      <div className="flex items-center space-x-1">
        {[...Array(totalPages)].map((_, i) => (
          <Button
            key={i + 1}
            variant={currentPage === i + 1 ? "default" : "outline"}
            onClick={() => setCurrentPage(i + 1)}
            className={cn(
              "w-8 h-8 p-0",
              currentPage === i + 1 
                ? "bg-[#008B8B] text-white hover:bg-[#40E0D0]"
                : "border-[#008B8B] text-[#008B8B] hover:bg-[#008B8B]/5"
            )}
          >
            {i + 1}
          </Button>
        ))}
      </div>

      <Button
        variant="outline"
        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="flex items-center border-[#008B8B] text-[#008B8B] hover:bg-[#008B8B]/5 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        次へ
        <ChevronRight className="h-4 w-4 ml-1" />
      </Button>
    </div>
  );
} 