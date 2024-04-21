import React from 'react'
import PostList from './FetchData'
import todoSlice from './Component/Redux/Slice'

const App = () => {
  return (
  <>
  <Provider store={todoSlice}>
      <PostList/>
  </Provider>

  
  </>
  )
}

export default App