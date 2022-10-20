
import {Fragment} from "react";
import {useSelector} from "react-redux";

import Header from "../src/component/Header";
import Auth from "../src/component/Auth";
import Counter from "../src/component/Counter";
import UserProfile from "./component/UserProfile";


function App() {
    const isAuth = useSelector(state => state.auth.isAuthenticated);
    return(
        <Fragment>
            <Header/>
            { !isAuth && <Auth/>}
            { isAuth && <UserProfile/>}
            <Counter/>
        </Fragment>
    );
}
export default App;
