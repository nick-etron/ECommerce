import { useState } from "react";

const Login = () => {
  const initialData = {
    Email: "",
    Password: "",
  };
  const initialErrors = {
    Email: "",
    Password: "",
  };
  const [FormData, setFormData] = useState(initialData);
  const [err, setErr] = useState(initialErrors);
  function validate(name, value) {
    if (value === "") {
      setErr((prevData) => ({
        ...prevData,
        [name]: name + " Can't be Empty",
      }));
    } else if (name === "Password" && value.length < 8) {
      setErr((prevData) => ({
        ...prevData,
        [name]: "Password Must be 8 characters long",
      }));
    } else {
      setErr((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    validate(name, value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="page-margin">
      <div className="w-96 m-auto md:mt-20 shadow-xl rounded-md">
        <h1 className="Page-title">Login</h1>
        <form className="p-3 " onSubmit={handleSubmit}>
          <div className="form-group ">
            <label>Email</label>
            <input
              placeholder="Email"
              name="Email"
              value={FormData.Email}
              onChange={handleChange}
            />
            {err.Email && <p className="text-red-500">{err.Email}</p>}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              placeholder="Password"
              name="Password"
              value={FormData.Password}
              onChange={handleChange}
              type="password"
            />
            {err.Password && <p className="text-red-500">{err.Password}</p>}
          </div>

          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
