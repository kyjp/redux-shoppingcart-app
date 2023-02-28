import Navbar from "./components/Navbar"
import Container from "./components/Container"
import CartContainer from "./components/CartContainer"
import { useEffect } from "react"
import { useAppDispatch } from "./app/hook"
import { useSelector } from "react-redux"
import { calculateTotals, selectCartItems } from "./slices/cart/CartSlice"

function App() {
  const dispatch = useAppDispatch()
  const cartItems = useSelector(selectCartItems)
  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])

  return (
    <main>
      <Navbar />
      <Container>
        <CartContainer />
      </Container>
    </main>
  );
}

export default App;
