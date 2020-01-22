import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutUsImage from "../../images/new.png";
import ghzawi from "../../images/pp.jpeg";
import Nsour from "../../images/ahmad.jpeg";

export default class AboutUsPage extends Component {
  render() {
    const AboutUsPage = {
      backgroundImage: `url(${AboutUsImage})`,
      WebkitBackgroundSize: "cover",
      MozBackgroundSize: "cover",
      OBackgroundSize: "cover",
      backgroundSize: "cover",
      height: "88vh",
      backgroundRepeat: "no-repeat"
    };

    return (
      <div className="p-2" style={AboutUsPage}>
        <div className="container bg-light py-5 mt-5 px-5 ">
          <div className="row text-center ">
            <div className="col-md-6 mb-5">
              <div className="bg-white rounded shadow-sm py-3 px-4 ">
                <img
                  src={Nsour}
                  alt=""
                  width="140"
                  className="img-fluid rounded-circle  img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Ahmad Nsour</h5>
                <span className="small text-uppercase text-muted">
                  CEO - Founder
                </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a
                      href="https://www.facebook.com/ahmad.nsouu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://github.com/AhmadNsour"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://www.linkedin.com/in/ahmad-alnsour-723672121"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 mb-5 ">
              <div className="bg-white rounded shadow-sm py-3 px-4 ">
                <img
                  src={ghzawi}
                  alt=""
                  width="160"
                  className="img-fluid rounded-circle  img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Ahmad Ghzawi</h5>
                <span className="small text-uppercase text-muted">
                  CEO - Founder
                </span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a
                      href="https://www.facebook.com/ahmd.al.ghzawi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://github.com/ahmadghzawi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://www.linkedin.com/in/ahmad-ghzawi-827082139"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
