import HeaderAuth from "../AuthHeader";

import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

const Home = ({ user, isAuthenticated, history }) => {
  return (
    <div>
      <HeaderAuth user={user} isAuthenticated={isAuthenticated} />
      <div className="row justify-content-center">
        <div className="col-lg-3">
          <div className="container">
            <div className="card mt-5">
              <div className="card-body">
                <h3 className="card-title text-center">Courses</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="container">
            <div className="card mt-5">
              <div className="card-body">
                <h1 className="card-title text-center">Create Post</h1>
                <div className="mt-4">
                  <form>
                    <div className="row">
                      <label className="col-sm-2 col-form-label text-center me-0 mt-0 pe-0">
                        <h5>Title</h5>
                      </label>
                      <div className="col-sm-10 ms-0 ps-0">
                        <input className="form-control" type="text"></input>
                      </div>
                    </div>
                    <div className="row">
                      <label className="col-sm-2 col-form-label text-center me-0 pe-0">
                        <h5>Body</h5>
                      </label>
                      <div className="col-sm-10 ms-0 ps-0">
                        <textarea className="form-control" rows="4"></textarea>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <label className="col-sm-2 col-form-label text-center me-0 pe-0">
                        <h5>Image</h5>
                      </label>
                      <div className="col-sm-10 ms-0 ps-0">
                        <input
                          className="form-control"
                          type="file"
                          id="formFile"
                        ></input>
                      </div>
                    </div>
                    <button type='submit' className='btn btn-light btn-block d-block mx-auto'>
                        Create
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card mt-5">
            <div className="card-body">
              <h3 className="card-title text-center"> Upcoming Events </h3>
            </div>
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

export default connect(mapStateToProps)(Home);
