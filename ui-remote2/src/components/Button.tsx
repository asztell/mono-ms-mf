import { useState } from 'react'

const Button = ({ onClick }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const [state, setState] = useState(0)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(event)
    setState((s) => s + 1)
  }

  return (
    <div>
      <button id="click-btn" className="shared-btn" onClick={handleClick}>
        from remote2 Clickk me: {state}
      </button>
      <button id="reset-btn" className="shared-btn" onClick={() => setState(0)}>
        Reset
      </button>
    </div>
  )
}

export default Button
