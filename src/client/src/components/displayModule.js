import ModuleCard from "./HomePage/ModuleCard";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

import {
  instructorUpload,
  startReload,
  reloadModule,
  stopReload,
} from "../actions/moduleAction";

import {
  createModules,
  isCreating,
  loadModules,
  cancelCreatingModule,
} from "../actions/moduleAction";

const ModuleCreate = ({
  user,
  history,
  modules,
  isCreatingModule,
  isCreating,
  cancelCreatingModule,
  createModules,
  loadModules,
  component
}) => {
  const [newModule, setNewModule] = useState({
    nameModule: "",
    descriptionModule: "",
  });

  const { nameModule, descriptionModule } = newModule;

  useEffect(() => {
    loadModules(history);
  }, []);

  const onCreateModule = (e) => {
    e.preventDefault();

    isCreating();
    history.push(`/${component}`);
  };

  const onCancelCreateModule = (e) => {
    e.preventDefault();

    cancelCreatingModule();
    history.push(`/${component}`);
  };

  const onChangeModule = (e) => {
    setNewModule({
      ...newModule,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitModule = (e) => {
    e.preventDefault();

    const module = {
      name: nameModule,
      description: descriptionModule,
    };

    setNewModule({
      nameModule: "",
    });

    createModules(module, user, history)
    onCancelCreateModule(e);
    window.location.reload();
  };

  return (
    <div className="container">
      <div className="card mt-3">
        <div className="card-body">
          <h2 className="card-title text-center">Modules</h2>
          {user && user.typeOfUser === "Instructor" && !isCreatingModule ? (
            <form onSubmit={onCreateModule}>
              <div className="text-center">
                <button className="btn btn-success text-center">
                  Create Module
                </button>
              </div>
            </form>
          ) : (
            ""
          )}

          {isCreatingModule ? (
            <>
              <hr></hr>
              <form onSubmit={onSubmitModule} className="mt-3 text-left">
                <label htmlFor="nameModule" className="text-left mb-0">
                  <h5>Name of Module</h5>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="nameModule"
                  id="nameModule"
                  value={nameModule}
                  onChange={onChangeModule}
                ></input>
                <div className="mt-2">
                  <label htmlFor="descriptionModule" className="text-left mb-0">
                    <h5>Description</h5>
                  </label>
                  <textarea
                    className="form-control"
                    name="descriptionModule"
                    id="descriptionModule"
                    value={descriptionModule}
                    onChange={onChangeModule}
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-success mt-3">
                    Create Module
                  </button>
                </div>
              </form>
              <form className="text-center" onSubmit={onCancelCreateModule}>
                <button type="submit" className="btn btn-danger mt-2">
                  Cancel
                </button>
              </form>
              <hr></hr>
            </>
          ) : (
            ""
          )}

          {modules.length > 0 ? (
            modules.map((module) => (
              <ModuleCard module={module} history={history} />
            ))
          ) : (
            <div className="text-center mt-3">
              <h4 className="text-light">Modules on the work!</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  modules: state.module.modules,
  toReloadModule: state.module.reloadModule,
  isAuthenticated: state.user.isAuthenticated,
  isCreatingModule: state.module.isCreatingModule,
  hasCreatedModule: state.module.hasCreatedModule,
});

export default connect(mapStateToProps, {
  startReload,
  reloadModule,
  stopReload,
  createModules,
  isCreating,
  loadModules,
  cancelCreatingModule,
})(ModuleCreate);
