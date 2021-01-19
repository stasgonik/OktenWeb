import React, {Component} from 'react';
import UserService from "../../Services/UserService";

class ChosenUser extends Component {

    state = {chosenOne: null}

    userService = new UserService();

    async componentDidMount() {

let {match:{params:{id}}} = this.props;
        console.log(this.props);

        let chosenOne = await this.userService.getOneUser(id);
        this.setState({chosenOne})
    }

    render() {
        let{chosenOne}=this.state;
        return (
            <div className={'chosenOne-container'}>
                {chosenOne && <div>
                <div className={'chosen-name'}>{chosenOne.name}<p className={'user-name'}>{chosenOne.username}</p>
                <hr/>
                </div>
                    <div className={'chosen-box'}>
                        <p><b>Phone:</b>{chosenOne.phone}</p>
                    <p>     <b>Email:</b>  {chosenOne.email}</p>
                    </div>
                    <p> <b>Website</b>  {chosenOne.website} </p>
                </div>
                }
            </div>
        );
    }
}

export default ChosenUser;