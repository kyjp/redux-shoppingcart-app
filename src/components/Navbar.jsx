import React from 'react'
import styled from '@emotion/styled'
import { useAppSelector } from '../app/hook'
import { selectAmount } from '../slices/cart/CartSlice'
import Container from './Container'

const NavStyled = styled.nav`
  background: #c2773e;
  padding: 1.25rem 2rem;
`

const NavCenterStyled = styled.div`
  color: #fff;
  display: grid;
  width: 100%;
  justify-items: start;
  align-items: center;
  grid-template-columns: auto 100px;
`

const NavContainerStyled = styled.div`
  display: block;
  position: relative;
`

const AmountContainerStyled = styled.div`
  position: absolute;
  top: -0.6rem;
  right: -1.6rem;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  background-color: #6d5016;
  justify-content: center;
`

const TotalAmountStyled = styled.p`
  color: #fff;
  font-size: 1.25rem;
`

const Navbar = () => {
  const amount = useAppSelector(selectAmount)
  return (
    <NavStyled>
      <Container>
        <NavCenterStyled>
          <h3>
            Redux Shopping
          </h3>
          <NavContainerStyled>
            カート
            <AmountContainerStyled>
              <TotalAmountStyled>
                {amount}
              </TotalAmountStyled>
            </AmountContainerStyled>
          </NavContainerStyled>
        </NavCenterStyled>
      </Container>
    </NavStyled>
  )
}

export default Navbar
