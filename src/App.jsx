import React from 'react'
import GetTodo from './components/getTodo'

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
        <div>
          Hello Still working!
        </div>
        <GetTodo/>
      </QueryClientProvider>
  )
}

export default App