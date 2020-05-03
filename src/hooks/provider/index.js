import React from 'react'

import { ViewportProvider } from '../use-viewport'

const wrapWith = (...wrappers) => ({ children }) =>
  wrappers.reduceRight(
    (rendered, Component) => <Component>{rendered}</Component>,
    children
  )

export default wrapWith(ViewportProvider)
