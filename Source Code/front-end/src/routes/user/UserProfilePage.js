import React, { Component } from "react";
import axios from "axios";

export default class UserProfilePage extends Component {
  state = {
    user: {
      name: null,
      email: null,
      mobileNumber: null,
      field: null
    },
    msg: null,
    show: false
  };

  componentDidMount() {
    let { name, email, mobileNumber, field } = this.props.loggedInUser;
    this.setState({
      user: {
        name,
        email,
        mobileNumber,
        field
      }
    });
  }

  onChange = () => {
    this.setState({ show: true });
  };
  updateProfile = event => {
    event.preventDefault();

    let _id = this.props.loggedInUser._id;
    let name = event.target["name"].value;
    let email = event.target["email"].value;
    let mobileNumber = event.target["mobileNumber"].value;
    let field = event.target["field"].value;

    if (
      name !== this.state.user.name ||
      email !== this.state.user.email ||
      mobileNumber !== this.state.user.mobileNumber ||
      field !== this.state.user.field
    ) {
      let user = { _id, name, email, mobileNumber, field };
      axios
        .post(`http://localhost:9000/update-user`, user)
        .then(res => {
          this.setState({
            msg: "Profile Updated Successfully!"
          });
        })
        .catch(err => console.log(err));

      setTimeout(() => {
        this.props.history.go("/UserProfilePage");
        this.props.getLoggedInUser();
      }, 3000);
    } else {
      console.log("empty");
    }
  };

  render() {
    let { name, email, mobileNumber } = this.state.user;
    const cardWidth = {
      width: "30%",
      position: "absolute",
      marginLeft: "320px"
    };

    const cardColor = {
      boxShadow: "0 0 10px 3px darkgray"
    };

    return (
      <div className="container mt-5 ">
        <div className="row mt-5">
          <div className="w-100 mt-5">
            <main className="col-md-4" style={cardWidth}>
              <div id="some-how" className="card bg-light" style={cardColor}>
                <div
                  style={{ backgroundColor: "#f9f9f9" }}
                  className="card-header text-center p-4"
                >
                  <h1 className="text-dark">
                    <i className="fas fa-edit"></i> Update Information
                  </h1>
                </div>
                <div className="card-body text-dark p-4 ">
                  <form onSubmit={this.updateProfile}>
                    <div className="form-group">
                      <h6>
                        <i className="fas fa-user"></i> Name:
                      </h6>
                      <input
                        defaultValue={name}
                        name="name"
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Name"
                        onChange={this.onChange}
                      />
                    </div>
                    <h6>
                      <i className="fas fa-at"></i> E-mail:
                    </h6>
                    <div className="form-group">
                      <input
                        defaultValue={email}
                        name="email"
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        onChange={this.onChange}
                      />
                    </div>
                    <h6>
                      <i className="fas fa-mobile-alt"></i> Mobile Number:
                    </h6>
                    <div className="form-group">
                      <input
                        defaultValue={mobileNumber}
                        name="mobileNumber"
                        type="text"
                        className="form-control"
                        id="mobileNumber"
                        placeholder="Mobile Number"
                        onChange={this.onChange}
                      />
                    </div>
                    <h6>
                      <i className="fab fa-cuttlefish"></i> Field:
                    </h6>
                    <div className="form-group">
                      <select
                        defaultValue="Default"
                        name="field"
                        className="form-control"
                      >
                        <option disabled>Select Field</option>
                        <option value="HR"> Human Resources </option>
                        <option value="IT"> Information Technology </option>
                      </select>
                    </div>
                    <div>
                      {this.state.show === true ? (
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          Edit Profile
                        </button>
                      ) : null}

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
                                <h5
                                  className="modal-title"
                                  id="exampleModalLabel"
                                >
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
                  </form>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}
