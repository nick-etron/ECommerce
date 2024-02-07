import { useState } from "react";

const Register = () => {
  const initialData = {
    Name: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  };
  const initialErrors = {
    Name: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  };
  const [FormData, setFormData] = useState(initialData);
  const [err, setErr] = useState(initialErrors);
  function validate(name, value) {
    if (value === "") {
      setErr((prevData) => ({
        ...prevData,
        [name]: name + " Can't be Empty",
      }));
    } else if (name === "ConfirmPassword" && value !== FormData.Password) {
      setErr((prevData) => ({
        ...prevData,
        [name]: "Password & Confirm Password Are Diffrent",
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

  return (
    <div className="page-margin">
      <div className="w-96 m-auto md:mt-20 shadow-xl rounded-md">
        <h1 className="Page-title">Register Now</h1>
        <form className="p-3 ">
          <div className="form-group">
            <label>Name</label>
            <input
              placeholder="Name"
              name="Name"
              value={FormData.Name}
              onChange={handleChange}
            />
            {err.Name && <p className="text-red-500">{err.Name}</p>}
          </div>
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
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              placeholder="Confirm Password"
              name="ConfirmPassword"
              value={FormData.ConfirmPassword}
              onChange={handleChange}
              type="password"
            />
            {err.ConfirmPassword && (
              <p className="text-red-500">{err.ConfirmPassword}</p>
            )}
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};
export default Register;
