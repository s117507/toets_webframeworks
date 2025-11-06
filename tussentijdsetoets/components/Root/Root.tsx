import {Outlet, Link} from "react-router-dom";
import styles from "./Root.module.css"

const Root = () => {
    return(
        <>
            <header>
                <nav>
                    <ul>
                <li><Link to="/detail/1">Oefening 1 </Link></li>
                <li><Link to="/detail/2">Oefening 2</Link></li>
                <li><Link to="/detail/3">Oefening 3</Link></li>
                    </ul>
                </nav>
            </header>
            <Outlet/>
        </>
    );
}

export default Root;
