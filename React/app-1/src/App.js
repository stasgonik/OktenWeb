import React, {Component} from 'react';
import './App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AllUsers from "./components/UserComponents/AllUsers";
class App extends Component {
    render() {
        return (
<Router>
            <div className={'main-div'}>
                <div className="link-box">
<Link className={'home'} to={'//localhost:3000/home'}>HOME</Link>
<Link className={'home'} to={'/users'}>USERS</Link>
                </div>

                <Switch>
                    <Route path={'/users'} render={()=>{
                        return <AllUsers/>
                    }}/>

                </Switch>

            </div>
</Router>
        );
    }
}

export default App;