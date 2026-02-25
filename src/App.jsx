import { createBrowserRouter, RouterProvider } from 'react-router'
import routes from './routes'
import { CartProvider } from './context/CartProvider';

const router = createBrowserRouter(routes);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  )
}

export default App
