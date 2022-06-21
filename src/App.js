import React from "react"
import Header from './components/Header'
import Contents from './components/Contents'

/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx, css } from '@emotion/react'

function App() {
  return (
    <div css={css` background-color : #082032; color : white `}>
      <Header />
      <Contents/>
    </div>
  );
}

export default App;
