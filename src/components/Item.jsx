import React from 'react'
import styled from '@emotion/styled'
import { useAppDispatch } from '../app/hook'
import { minusItem, plusItem, removeItem } from '../slices/cart/CartSlice'

const ItemStyled = styled.div`
  display: grid;
  grid-template-columns: 150px auto 100px;
  gap: 10px;
  margin-top: 20px;
`

const ItemNameStyled = styled.div`
  display: grid;
  align-items: center;
`

const ItemButtonStyled = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
`

const Item = ({
  item
}) => {
  const dispatch = useAppDispatch()
  return (
    <ItemStyled>
      <div><img src="https://placehold.jp/150x150.png" alt="" /></div>
      <ItemNameStyled>
        <div>
          <div>{item.title}</div>
          <div>{item.price}円</div>
          <div><button onClick={() => {
            dispatch(removeItem({
              id: item.id
            }))
          }}>削除</button></div>
        </div>
      </ItemNameStyled>
      <ItemButtonStyled>
        <button
          onClick={() => { dispatch(plusItem({ id: item.id }))}}
        >+</button>
        {item.amount}
        <button
          onClick={() => {
            if (item.amount === 1) {
              dispatch(removeItem({ id: item.id }))
            } else {
              dispatch(minusItem({ id: item.id }))
            }
          }}
        >-</button>
      </ItemButtonStyled>
    </ItemStyled>
  )
}

export default Item
