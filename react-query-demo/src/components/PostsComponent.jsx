/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useQuery } from "react-query";

// Fetch posts from JSONPlaceholder API
const fetchPosts = async (page = 1) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

const PostsComponent = () => {
  const [page, setPage] = useState(1);

  // Use React Query's useQuery hook
  const { data, isLoading, isError, error, isFetching, refetch } = useQuery(
    ["posts", page], // Unique query key that includes page
    () => fetchPosts(page),
    {
      keepPreviousData: true, // Retain data while fetching new page
      staleTime: 30000, // Data is fresh for 30 seconds
      refetchOnWindowFocus: true, // Refetch on focus
    }
  );

  // Loading state
  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  // Error state
  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  // Render posts
  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? "Refetching..." : "Refetch Posts"}
      </button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: "20px" }}>
        {/* Pagination Controls */}
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1 || isFetching}
        >
          Previous
        </button>
        <span style={{ margin: "0 10px" }}>Page {page}</span>
        <button
          onClick={() => setPage((old) => old + 1)}
          disabled={isFetching || data.length < 10}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PostsComponent;
