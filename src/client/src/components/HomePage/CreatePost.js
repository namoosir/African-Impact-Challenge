import HeaderAuth from "../AuthHeader";
import { connect } from "react-redux";

import { Link, withRouter } from "react-router-dom";

const CreatePost = ({ user, isAuthenticated }) => {
  return (
    <div>
      <HeaderAuth user={user} isAuthenticated={isAuthenticated} />
      <h1>HELLO</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user.sentUser,
  isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps)(CreatePost);
