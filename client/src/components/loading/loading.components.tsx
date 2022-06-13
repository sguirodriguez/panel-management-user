import React from 'react'
import { Container, Spinner } from './loading.styles'
const Loading = () => {
  return (
    <Container>
      <Spinner className="spinner-border text-primary" role="status" />
    </Container>
  )
}

export default Loading
