import Layout from './components/Layout/Layout'
import Home from "./pages/Home/Home"
import Shop from "./pages/Shop/Shop"
import Cart from "./pages/Cart/Cart"
import ErrorPage from "./pages/ErrorPage/ErrorPage"

const routes = [
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/shop',
                element: <Shop />
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ]
    }
]

export default routes