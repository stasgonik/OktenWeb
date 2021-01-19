import React, {Component} from 'react';
import './user-styles.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    Link
} from "react-router-dom";
class User extends Component {
    render() {
        let {item,match:{url},func} = this.props;

        return (
            <div className={'item-box'}>
                <div className="items">{item.id}.{item.name}
                    <div className={'link-button'} >
                        <Link className={'link'} to={url +'/'+item.id +"/details"}>details</Link>
                        <Link to={url+'/'+item.id+'/posts'}>posts</Link>
                    </div>



                </div>

            </div>
        );
    }
}

export default withRouter(User);