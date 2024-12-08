/* eslint-disable no-unused-vars */
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PostsComponent from "./PostsComponent";
import React from 'react';
import HomePage from './components/HomePage';

const App = () => {
  return <HomePage />;
};

export default App;
