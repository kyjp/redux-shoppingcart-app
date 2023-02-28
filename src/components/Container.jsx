import React from 'react'
import styled from '@emotion/styled'

const ContainerStyled = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
`

const Container = ({children}) => {
  return (
    <ContainerStyled>{children}</ContainerStyled>
  )
}

export default Container
