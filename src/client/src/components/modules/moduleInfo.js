const ModuleInfo = ({ module }) => {
  return (
    <div className="d-flex justify-content-center mt-2">

      <div className="container mt-2">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title text-center">
              {module && module.name
                ? module.name
                : "CSCC01: Introduction to Software Engineering"}
            </h1>
            {module && module.description ? (
              <>
                <hr></hr>
                <blockquote
                  className="bg-light px-2 py-2"
                  style={{ borderRadius: "15px" }}
                >
                  <h5 className="text-dark mb-3">{module.description}</h5>
                  <footer className="blockquote-footer mb-0">
                    {module.user ? module.user.name : ""}
                  </footer>
                </blockquote>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleInfo;