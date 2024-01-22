import React, { useState } from 'react'

import Routing from './Routing/Routing'

const App = () => {
  const [theme,setTheme] = useState(false)
  return (
    <div className='bg-black h-full text-white'>
      <Routing/>
    </div>
  )
}

export default App