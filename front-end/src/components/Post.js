import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Post extends Component {
  render() {
    let {
      question,
      answer,
      field,
      user_id,
      post_id,
      loggedInUser,
      page
    } = this.props;

    return (
      <div className="col-md-12 mt-3">
        <div id="card-container" className="card">
          <div id="card-id" className="card-header">
            <h3>
              <i className="far fa-question-circle"></i> {question}
            </h3>
          </div>
          <div className="card-body">
            {loggedInUser.role === null ? null : (
              <div>
                <div className="ml-4">
                  <h4>
                    <i className="fas fa-envelope-open-text"></i> {answer}
                  </h4>
                  <p>
                    <i className="fab fa-cuttlefish"></i> {field}
                  </p>
                </div>
                {loggedInUser.role === "hrAdmin" &&
                field === "HR" &&
                page !== "LandingPage" ? (
                  <button
                    className="btn btn-danger float-right"
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    onClick={() => this.props.deletePost(post_id)}
                  >
                    Delete Post
                  </button>
                ) : null}
                {loggedInUser.role === "techAdmin" &&
                field !== "HR" &&
                page !== "LandingPage" ? (
                  <button
                    className="btn btn-danger float-right"
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    onClick={() => this.props.deletePost(post_id)}
                  >
                    Delete Post
                  </button>
                ) : null}
                {loggedInUser.role === "owner" && page !== "LandingPage" ? (
                  <button
                    className="btn btn-danger float-right"
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Delete Post
                  </button>
                ) : null}
              </div>
            )}
            <Link
              to={
                loggedInUser.role === null
                  ? { pathname: "/LoginPage" }
                  : {
                      pathname: "/PostPage",
                      state: {
                        question,
                        answer,
                        field,
                        user_id,
                        post_id,
                        loggedInUser
                      }
                    }
              }
              className="float-left"
            >
              <h3>Read More</h3>
            </Link>
          </div>
        </div>
        <div>
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
                      onClick={() => this.props.deletePost(post_id)}
                      className="btn btn-danger"
                    >
                      Delete Post
                    </button>
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
