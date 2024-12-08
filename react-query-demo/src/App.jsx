/* eslint-disable no-unused-vars */
import React from "react";
import HomePage from './components/HomePage';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PostsComponent from "./PostsComponent";

// Initialize QueryClient
const queryClient = new QueryClient();

function App() {
  return (
    <HomePage/>
  );
}

export default App;
