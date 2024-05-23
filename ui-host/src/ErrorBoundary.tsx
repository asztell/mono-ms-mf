import React, { ErrorInfo } from 'react'

export class ErrorBoundary extends React.Component {
  constructor(props: object) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: unknown) {
    // Update state so the next render will show the fallback UI.
    console.error('getDerivedStateFromError error: ', error)
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    console.error(error, info)
    // logErrorToMyService(error, info.componentStack);
  }

  render() {
    if ((this.state as { hasError: boolean }).hasError) {
      // You can render any custom fallback UI
      return (this.props as { fallback: React.ReactNode }).fallback
    }

    return (this.props as { children: React.ReactNode }).children
  }
}
