import React, {Component} from "react";
import Dashboard from "../Dashboard/Dashboard";
import Role from "../roles";
import User from "../users";
import Service from "../Services";
import Support from "../Support";
import Messages from "../Messages";
import Safir from "../Safir";
import Customer from "../Customer";
import Discount from "../Discount";
import Payment from "../Payment";
import Setting from "../Setting";
import AuthRoute from "../../Util/AuthRoute";
import Request from "../Request";
import Menu from "../Menu";

class MyRoutes extends Component {

    render() {

        return (
            <div>
                <AuthRoute path='/(dashboard|)/'
                            component={Dashboard}
                            redirectTo="/login"
                            authenticated={this.props.authenticated} />

                <AuthRoute path='/role' component={Role} redirectTo="/login"
                            authenticated={this.props.authenticated} />

                <AuthRoute path='/user' component={User} redirectTo="/login"
                            authenticated={this.props.authenticated} />

                <AuthRoute path='/service' component={Service} redirectTo="/login"
                    authenticated={this.props.authenticated} />

                <AuthRoute path='/support' component={Support} redirectTo="/login"
                    authenticated={this.props.authenticated} />

                <AuthRoute path='/messages' component={Messages} redirectTo="/login"
                    authenticated={this.props.authenticated} />

                <AuthRoute path='/safir' component={Safir} redirectTo="/login"
                    authenticated={this.props.authenticated} />

                <AuthRoute path='/customer' component={Customer} redirectTo="/login"
                    authenticated={this.props.authenticated}/>

                <AuthRoute path='/discount' component={Discount} redirectTo="/login"
                    authenticated={this.props.authenticated}/>

                <AuthRoute path='/payment' component={Payment} redirectTo="/login"
                    authenticated={this.props.authenticated}/>

                <AuthRoute path='/request' component={Request} redirectTo="/login"
                    authenticated={this.props.authenticated}/>

                <AuthRoute path='/setting' component={Setting} redirectTo="/login"
                    authenticated={this.props.authenticated}/>

                <AuthRoute path='/menu' component={Menu} redirectTo="/login"
                    authenticated={this.props.authenticated}/>
            </div>
        );
    }
}

export default MyRoutes;