import { useState } from 'react'

export const Button = () => {
  const [state, setState] = useState(0)
  return (
    <div>
      <button
        id="click-btn"
        className="shared-btn"
        onClick={() => setState((s) => s + 1)}
      >
        Clickk me: {state}
      </button>
      <button id="reset-btn" className="shared-btn" onClick={() => setState(0)}>
        Reset
      </button>
    </div>
  )
}

// export default Button
