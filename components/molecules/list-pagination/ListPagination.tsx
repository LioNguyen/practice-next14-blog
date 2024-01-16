"use client";

import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export interface ListPaginationProps {
  activePage: number;
  totalPages: number;
}

export function ListPagination({
  activePage,
  totalPages,
}: ListPaginationProps) {
  const router = useRouter();
  const arr = new Array(totalPages).fill(0);

  const canGoBack = activePage > 1;
  const canGoNext = activePage < totalPages;

  const handleClickBack = () => {
    if (!canGoBack) return;

    router.push(`/?page=${activePage - 1}`);
  };

  const handleClickNext = () => {
    if (!canGoNext) return;

    router.push(`/?page=${activePage + 1}`);
  };

  return (
    <Pagination className="mt-4">
      <PaginationContent>
        <PaginationItem
          className={cn(
            "cursor-pointer",
            canGoBack ? "" : "text-muted-foreground  cursor-not-allowed"
          )}
        >
          <PaginationPrevious onClick={handleClickBack} />
        </PaginationItem>
        {arr.map((_, index) => (
          <PaginationItem key={index} className="cursor-pointer">
            <PaginationLink
              onClick={() => router.push(`/?page=${index + 1}`)}
              isActive={activePage === index + 1}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        {/* <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem> */}
        <PaginationItem
          className={cn(
            "cursor-pointer",
            canGoNext ? "" : "text-muted-foreground cursor-not-allowed"
          )}
        >
          <PaginationNext onClick={handleClickNext} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
