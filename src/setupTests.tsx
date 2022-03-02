// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import React, { ReactElement } from 'react'
import { HelmetProvider } from 'react-helmet-async'

type TestWrapperProps = {
  children: ReactElement
}

const TestWrapper = ({ children }: TestWrapperProps): ReactElement => {
  return <HelmetProvider>{children}</HelmetProvider>
}

export default TestWrapper
