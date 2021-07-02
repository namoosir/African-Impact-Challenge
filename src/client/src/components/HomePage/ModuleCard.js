import home from "../stylesheets/home.css";
import { connect } from "react-redux";
import { clickedModule } from "../../actions/moduleAction";

const ModuleCard = ({ module, history, clickedModule }) => {
  const onClickModule = (e) => {
    e.preventDefault();

    clickedModule(module);
    history.push("/module");
  };

  return (
    <form
      onSubmit={onClickModule}
      className="mt-3 d-flex justify-content-center"
    >
      <button type="submit" className="btn btn-light but px-2 py-2">
        <h4 className="mod-title">
          {module ? module.name : "CSCC01: Software Enginnering"}
        </h4>
        <h5 className="inst">{module ? module.user.name : "Ilir Dema"}</h5>
      </button>
    </form>
  );
};

export default connect(null, { clickedModule })(ModuleCard);
