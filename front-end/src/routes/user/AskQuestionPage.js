import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default class AskQuestionPage extends Component {
  state = {
    msg: null,
    show: false
  };

  onChange = () => {
    this.setState({ show: true });
  };
  askQuestion = event => {
    event.preventDefault();
    let question = {
      question: event.target["question"].value,
      field: event.target["field"].value,
      user_id: this.props.loggedInUser._id,
      status: "Pending..."
    };

    axios
      .post("http://localhost:9002/ask-question", question)
      .then(res => {
        this.setState({
          msg:
            "Your Question Will be Reviewed and Answered! Please Check User Dashboard"
        });
      })
      .catch(err => console.log(err));

    setTimeout(() => {
      this.setState({ msg: null });
    }, 3000);
  };

  render() {
    if (this.props.loggedInUser.role === null) {
      return <Redirect to="/LoginPage" />;
    }
    const cardStyle = {
      boxShadow: " 0 0 10px 3px darkgray"
    };

    return (
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-md-3 mt-5"></div>
          <main className="col-md-6 mt-5">
            <div className="card bg-light mb-3 mt-5" style={cardStyle}>
              <div className="card-header text-center p-4">
                <h1 className="text-dark">
                  <i className="fas fa-question"></i> Ask Question
                </h1>
              </div>
              <div className="card-body text-dark p-4">
                <form onSubmit={this.askQuestion}>
                  <div className="form-group">
                    <h3 htmlFor="exampleFormControlTextarea1">Question:</h3>
                    <textarea
                      className="form-control"
                      name="question"
                      id="exampleFormControlTextarea1"
                      rows="4"
                      placeholder="write your question here ..."
                      onChange={this.onChange}
                    ></textarea>
                    <br />
                    <h3 htmlFor="">Field:</h3>
                    <select
                      defaultValue="Default"
                      name="field"
                      className="form-control"
                    >
                      <option disabled>Select Field</option>
                      <option value="HR"> Human Resources </option>
                      <option value="IT"> Information Technology </option>
                    </select>
                    <br />
                    {this.state.show === true ? (
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        Ask Question
                      </button>
                    ) : null}
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
                            <button type="submit" className="btn btn-primary">
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
                </form>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
