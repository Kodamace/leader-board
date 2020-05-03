import React from 'react'

import { UserProvider } from '../use-user'
import { ViewportProvider } from '../use-viewport'

const wrapWith = (...wrappers) => ({ children }) =>
  wrappers.reduceRight(
    (rendered, Component) => <Component>{rendered}</Component>,
    children
  )

export default wrapWith(UserProvider, ViewportProvider)
