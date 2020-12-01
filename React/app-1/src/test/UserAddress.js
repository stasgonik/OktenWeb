import React, { Component } from 'react';

class UserAddress extends Component {
    
    render() { 
        let {item, key} = this.props
        return (<div>
            <h3>
                {item.name} - {item.age} - {item.status.toString()} - address:
                 {item.address.city}, street {item.address.street}, {item.address.number}
            </h3>
        </div>);
    }
}
 
export default UserAddress;