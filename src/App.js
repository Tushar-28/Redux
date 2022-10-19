
import {Fragment} from "react";

import Header from "../src/component/Header";
import Auth from "../src/component/Auth";
import Counter from "../src/component/Counter";



function App() {
    return(
        <Fragment>
            <Header/>
            <Auth/>
            <Counter/>
        </Fragment>
    );
}
export default App;
