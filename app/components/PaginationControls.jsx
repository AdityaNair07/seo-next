"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const PaginationControls = ({ total }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const totalEntries = total;
  const limit = searchParams.get("limit") || 10;
  const page = searchParams.get("page") || 1;

  return (
    <div className="flex gap-3 items-center">
      <button
        className="px-2 py-1 text-white bg-teal-400 rounded-md disabled:bg-teal-200"
        disabled={page <= 1}
        onClick={() => router.push(`?limit=${limit}&page=${Number(page) - 1}`)}
      >
        Prev
      </button>
      {page}/{Math.ceil(totalEntries / limit)}
      <button
        disabled={page >= totalEntries}
        className="px-2 py-1 text-white bg-teal-400 rounded-md disabled:bg-teal-200"
        onClick={() => router.push(`?limit=${limit}&page=${Number(page) + 1}`)}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationControls;
