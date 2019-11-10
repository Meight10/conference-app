import React, {Component, Fragment} from 'react';

import "./styles/BadgeNew.css"
import header from "../images/badge-header.svg";
import NavBar from "../components/Navbar";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends Component {

    state = {
        form: {}
    };

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: [e.target.value],
            }
        })
    };


    render() {
        return (
            <Fragment>
                <div className={"BadgeNew__hero"}>
                    <img className={"img-fluid"} src={header} alt="logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                jobTitle={this.state.form.jobTitle}
                                avatarImage={"https://www.gravatar.com/avatar?d=identicon"}
                                twitterAccount={this.state.form.twitter}
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm
                                onChange={this.handleChange}
                                formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default BadgeNew;