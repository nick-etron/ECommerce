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
    <div className="w-96 m-auto md:mt-16 shadow-xl rounded-md">
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
        <button className="bg-blue-400 p-2 text-white rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Register;
