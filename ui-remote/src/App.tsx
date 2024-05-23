// import { useState } from 'react'
// import Button from './Button'
// import Button from 'ui-remote2/components'
import _Button from 'ui-remote2/Button'
const Button = _Button as React.ElementType
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Button />
    </>
  )
}

export default App
