import { lazy, useState } from 'react'
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const Button = require('ui-remote2/Button').default as React.ElementType

// import _Button from 'ui-remote2/Button'
// const Button = _Button as React.ElementType
// const Button = lazy(() => import('ui-remote2/Button'))
import Button from 'ui-remote2/Button'

function Form() {
  const formFields: {
    firstName: string
    lastName: string
  } = {
    firstName: '',
    lastName: ''
  }

  const [state, setState] = useState(formFields)
  const [showFields, setShowFields] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setState({ ...state, [name]: value })
  }

  const handleClick = () => {
    setShowFields((prev) => !prev)
  }

  return (
    <>
      <span>Form from remote-ui</span>
      {Object.keys(state).map((key) => (
        <Input
          key={key}
          type="text"
          name={key}
          onChange={handleChange}
          value={state[key as keyof typeof state]}
        />
      ))}
      <Button onClick={handleClick} />
      {showFields && (
        <div>
          {Object.keys(state).map((key) => (
            <p key={key}>
              {key}: {state[key as keyof typeof state]}
            </p>
          ))}
        </div>
      )}
    </>
  )
}

function Input({
  type,
  name,
  onChange,
  value
}: {
  type: string
  name: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}) {
  return <input type={type} name={name} onChange={onChange} value={value} />
}

export default Form
