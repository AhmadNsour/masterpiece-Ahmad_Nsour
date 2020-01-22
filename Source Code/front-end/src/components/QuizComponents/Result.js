import React from "react";
import PropTypes from "prop-types";
import { CSSTransitionGroup } from "react-transition-group";

function Result(props) {
  console.log("props", props);
  return (
    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <h1>Your Quiz will be reviewed in 15 minutes</h1>
      <h1>Check result in your dashboard</h1>
    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
