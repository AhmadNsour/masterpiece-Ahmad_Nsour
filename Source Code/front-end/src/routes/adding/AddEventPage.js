import React, { Component } from "react";
import axios from "axios";
import { storage } from "../../firebase";

export default class AddEventPage extends Component {
  state = {
    image: null,
    url: "",
    progress: 0,
    msg: null,
    show: false
  };

  onChange = () => {
    this.setState({ show: true });
  };
  addEvent = e => {
    e.preventDefault();
    let event = {
      title: e.target["title"].value,
      img_path: this.state.url,
      url: e.target["url"].value,
      description: e.target["description"].value
    };
    if (
      event.title === "" ||
      event.img_path === "" ||
      event.url === "" ||
      event.description === ""
    ) {
    } else {
      axios
        .post("http://localhost:9000/add-event", event)
        .then(res =>
          this.setState({
            msg: "Event Added Successfully! Check It In Events Page"
          })
        )
        .catch(err => console.log(err));

      setTimeout(() => {
        this.props.history.go("/AddEventPage");
      }, 3000);
    }
  };

  getImage = event => {
    alert("Click Upload To Start Uploading The Image!");
    const image = event.target.files[0];
    this.setState(() => ({ image }));
  };

  fileUpload = () => {
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            this.setState({ url });
          });
      }
    );
  };

  render() {
    const cardWidth = {
      width: "30%",
      position: "absolute",
      marginLeft: "150px"
    };
    return (
      <div className="container-fluid ">
        <div className="row ">
          <div className="w-100">
            <div className=" w-50 m-auto">
              <div className="container">
                <div className="card bg-light mt-4 " style={cardWidth}>
                  <div className="card-header text-center centered">
                    <h1>Add Event</h1>
                  </div>
                  <div className="card-body">
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="validatedCustomFile"
                        name="img_path"
                        onChange={this.getImage}
                        required
                      />
                      <progress
                        className="mt-2 w-50 h-75"
                        value={this.state.progress}
                        max="100"
                      />
                      {this.state.image !== null ? (
                        <button
                          className="btn btn-primary ml-5 mt-2 w-25"
                          onClick={this.fileUpload}
                        >
                          Upload
                        </button>
                      ) : null}
                      <br />
                      <br />
                      <label
                        className="custom-file-label"
                        htmlFor="validatedCustomFile"
                      >
                        Choose file...
                      </label>
                      <div className="invalid-feedback">
                        Example invalid custom file feedback
                      </div>
                    </div>
                    <form onSubmit={this.addEvent}>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Title</label>
                        <input
                          type="text"
                          className="form-control"
                          name="title"
                          aria-describedby=""
                          placeholder="Add Title"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Event URL</label>
                        <input
                          type="text"
                          className="form-control"
                          name="url"
                          placeholder="URL"
                        />
                      </div>
                      <div className="md-form amber-textarea active-amber-textarea">
                        <label htmlFor="form22">Event Description here:</label>

                        <textarea
                          id="form22"
                          name="description"
                          className="md-textarea form-control"
                          rows="4"
                          onChange={this.onChange}
                        ></textarea>
                      </div>
                      <br />
                      {this.state.url === "" ? null : (
                        <div>
                          <img
                            src={this.state.url}
                            alt="Img"
                            className="img-thumbnail mb-3"
                          ></img>
                        </div>
                      )}
                      {this.state.show === true ? (
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          Add Event
                        </button>
                      ) : null}
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
                                <div className="modal-body">
                                  Are you sure?...
                                </div>
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
                                    className="btn btn-danger"
                                  >
                                    Add Event
                                  </button>
                                </div>
                                {this.state.msg === null ? null : (
                                  <div
                                    className="alert alert-success"
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
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}
