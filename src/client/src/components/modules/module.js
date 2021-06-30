import AuthHeader from "../AuthHeader";

import { connect } from "react-redux";

const Module = ({ user, isAuthenticated, history }) => {

  return (
    <div>
      <AuthHeader
        user={user}
        isAuthenticate={isAuthenticated}
        history={history}
      />
      <div className="container">
          <div className="card my-4">
            <div className="card-body" style={{height:"80vh"}}>

            </div>
          </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user.sentUser,
  isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps, null)(Module);
