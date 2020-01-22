import React from "react";
import PropTypes from "prop-types";
import { CSSTransitionGroup } from "react-transition-group";
// import { CSSTransitionGroup } from "react-transition-group";

function Result(props) {
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
      <div>
        Your Mark is <strong>{props.quizResult}</strong> out of!
      </div>
    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
