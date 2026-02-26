import { createBrowserRouter, RouterProvider } from 'react-router'
import routes from './routes'
import { CartProvider } from './context/CartProvider';
import { ProductProvider } from './context/ProductProvider';

const router = createBrowserRouter(routes);

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ProductProvider>
  )
}

export default App
