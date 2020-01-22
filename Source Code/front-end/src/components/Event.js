import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Event extends Component {
  deleteEvent() {
    this.props.deleteEvent(this.props.event_id);
  }

  render() {
    let {
      img,
      title,
      description,
      url,
      page,
      event_id,
      loggedInUser
    } = this.props;
    return (
      <div className="col-md-12 mt-3">
        <div id="row-card" className="card mb-3">
          <img
            style={{ backgroundSize: "cover", height: "150px" }}
            className="card-img-top"
            src={img}
            alt="Card img cap"
          />
          <div className="card-body">
            <h5 id="event-card-event" className="card-title">
              <i className="far fa-calendar-alt"></i> {title}
            </h5>
            <a
              className="card-text"
              href={`http://${url}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-link"></i>
              {url}
            </a>
            <p className="card-text">
              <Link
                className="float-left"
                to={{
                  pathname: "/EventPage",
                  state: {
                    event_id,
                    img,
                    title,
                    url,
                    page,
                    description,
                    role: loggedInUser.role
                  }
                }}
                style={{ textDecoration: "none", marginTop: "11px" }}
              >
                <i className="fas fa-angle-double-right"></i> Read more
              </Link>
              {this.props.page !== "LandingPage" &&
              this.props.loggedInUser.role === "owner" ? (
                <button
                  id="close-identity"
                  className="btn btn-danger float-right"
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  <i className="far fa-times-circle"></i>
                </button>
              ) : null}
            </p>
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
                      onClick={() => this.deleteEvent()}
                      className="btn btn-danger"
                    >
                      Delete Event
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
