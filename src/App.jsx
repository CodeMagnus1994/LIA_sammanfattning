import React from 'react';
import GetTodo from './components/getTodo';
import Message from './components/message';
import ReactForm from './components/ReactForm';
import Emotion from './components/Emotion';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    }
  }
})

function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialsOpen={false}/>
        <BrowserRouter>
        <Routes>
        <Route path="/gettodo" element={<GetTodo/>}/>
        <Route path="/message" element={<Message/>}/>
        <Route path="/reactform" element={<ReactForm/>}/>
        <Route path="/emotion" element={<Emotion/>}/>
        </Routes>
        </BrowserRouter>
      </QueryClientProvider>
  )
}

export default App