/* eslint-disable no-unused-vars */
import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './PostsComponent';
import { postsQuery } from './queries/postsQuery';
import FormikForm from './components/FormikForm';
import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
const queryClient = new QueryClient();
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
    <FormikForm/>
    <PostsComponent/>
    </>
  )
}

export default App
