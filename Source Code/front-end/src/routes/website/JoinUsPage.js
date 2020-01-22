import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import JoinUsPageImage from "../../images/JoinUsPageImage.jpg";

export default class JoinUsPage extends Component {
  state = {
    msg: null
  };

  submitApplication = () => {
    axios
      .post("http://localhost:9000/application", this.props.loggedInUser)
      .then(res =>
        this.setState({
          msg: res.data
        })
      )
      .catch(err => console.log(err));

    setTimeout(() => {
      this.setState({ msg: null }, () => {
        this.props.history.go("/");
      });
    }, 3000);
  };

  render() {
    if (this.props.loggedInUser.role === null) {
      return <Redirect to="/LoginPage" />;
    }
    const JoinUsPage = {
      backgroundImage: `url(${JoinUsPageImage})`,
      WebkitBackgroundSize: "cover",
      MozBackgroundSize: "cover",
      OBackgroundSize: "cover",
      backgroundSize: "cover",
      height: "81vh",
      backgroundRepeat: "no-repeat"
    };
    return (
      <div className="p-5 mt-5" style={JoinUsPage}>
        <div className="col-md-12 ">
          <div className="mt-5 card text-center w-50 m-auto">
            <div className="card-header">
              <h1>
                <i className="fas fa-users"></i> Join Us{" "}
              </h1>
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Our members make a visible difference by serving as community
                leaders using their experience to create positive, lasting
                change in our communities.
              </h5>
              <p className="card-text">
                WHY SHOULD YOU JOIN?
                <li>Contribute valuable service to the community</li>
                <li>
                  Gain knowledge and experience through the study and discussion
                  of timely and important topics
                </li>
                <li>
                  discover new interests, develop new skills and learn about
                  crucial issues in your community
                </li>
                <li>
                  make professional contacts and develop lasting friendships as
                  you meet others in League who share your interests
                </li>
              </p>
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Submit Application
              </button>
            </div>
            <div>
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Warring
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">Are you sure?...</div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="submit"
                        onClick={this.submitApplication}
                        className="btn btn-primary"
                      >
                        Save changes
                      </button>
                    </div>
                    {this.state.msg === null ? null : (
                      <div
                        className="alert alert-success mt-4"
                        style={{ textAlign: "center" }}
                        role="alert"
                      >
                        {this.state.msg}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
