import styled from '@emotion/styled'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hook'
import { clearCartItems, removeItem, selectAmount, selectCartItems, selectTotal } from '../slices/cart/CartSlice'
import Item from './Item'


const HrStyled = styled.hr`
  margin-top: 20px;
`

const CartButtobStyled = styled.div`
  margin-top: 20px;
`

const CartTotalStyled = styled.div`
`

const CartContainer = () => {
  const dispatch = useAppDispatch()
  const amount = useAppSelector(selectAmount)
  const cartItems = useAppSelector(selectCartItems)
  const total = useAppSelector(selectTotal)
  if (amount < 1) return (
    <>
    <h2>買い物かご</h2>
    <p>カートに商品は存在しません</p>
  </>)
  return (
    <section>
      <h2>買い物かご</h2>
      {cartItems.map((item, index) =>
        <Item
          item={item}
          key={index}
        />
      )}
      <HrStyled/>
      <CartTotalStyled>
        <h4>合計</h4>
        <span>{ total }円</span>
      </CartTotalStyled>
      <CartButtobStyled>
        <button onClick={() => {
          dispatch(clearCartItems())
        }}>全削除</button>
      </CartButtobStyled>
    </section>
  )
}

export default CartContainer
