import React, { lazy, Suspense } from 'react'
import './App.css'

// import _Form from 'ui-remote/Form'
// @ts-expect-error ...
const Form = lazy(() => import('ui-remote/Form'))
// const _Form = lazy(() => import('ui-remote/Form'))
// const Form = _Form as React.ElementType

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Suspense fallback="loading form">
        <Form />
      </Suspense>
    </>
  )
}

export default App
