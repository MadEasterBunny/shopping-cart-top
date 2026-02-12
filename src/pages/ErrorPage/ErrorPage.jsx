import { Link } from "react-router"

function ErrorPage() {
    return(
        <>
            <h1>Page Not Found</h1>
            <Link to='/'>
                Return home
            </Link>
        </>
    )
}

export default ErrorPage