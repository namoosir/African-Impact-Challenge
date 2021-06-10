import  {useState} from 'react';

const settings = require("../stylesheets/settings.css");

const UpdateSettings = () => {

    const [setting, setSetting] = useState({
        name: '',
        username: '',
        email: '',
        password: '', 
    });

  const onChange = (e) => {
    setSetting({
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto d-flex justify-content-center align-items-center mt-5">
      <div className="row">
          <div classname="card settings mt-5">
            <div className="card-body mt-5">
              <h1 className="card-title heading mt-2">Account Settings</h1>
              <form >
                <div className="lastname_btn my-3">
                  <label className="form-label" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="input_text form-control"
                    id="name"
                    type="text"
                    value={setting.name}
                    onChange={onChange}
                  />
                </div>

                <div className="username_btn mb-3">
                  <label className="form-label" htmlFor="username">
                    Username
                  </label>
                  <input
                    className="input_text form-control"
                    id="username"
                    type="text"
                    value={setting.username}
                    onChange={onChange}
                  />
                </div>

                <div className="email_btn mb-3">
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="input_text form-control"
                    id="email"
                    type="email"
                    value={setting.email}
                    onChange={onChange}
                  />
                </div>

                <div className="password_button mb-3">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="input_text form-control"
                    type="password"
                    id="password"
                    value={setting.password}
                    onChange={onChange}
                  />
                </div>
                <div className='text-center'>
                    <button type="submit" class="btn btn-light mt-4">
                    Update
                    </button>
                </div>
              </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateSettings;
