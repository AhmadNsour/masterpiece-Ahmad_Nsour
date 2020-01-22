import React, { Component } from "react";
import axios from "axios";

export default class EventPage extends Component {
  deleteEvent = _id => {
    if (window.confirm("Delete Event?....")) {
      axios
        .post("http://localhost:9000/delete-event", { _id })
        .then(res => this.props.history.goBack());
    } else {
      return false;
    }
  };

  render() {
    let {
      img,
      title,
      url,
      event_id,
      description,
      role
    } = this.props.location.state;
    return (
      <div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12">
              <div className="card mb-3">
                <img src={img} className="card-img-top" alt="img" />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <a href={url} className="car-text">
                    <h6>{url}</h6>
                  </a>
                  <p className="card-text">{description}</p>
                </div>
              </div>
              {role === "owner" ? (
                <button
                  className="btn btn-danger float-right"
                  onClick={() => this.deleteEvent(event_id)}
                >
                  Delete Event
                </button>
              ) : null}
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
