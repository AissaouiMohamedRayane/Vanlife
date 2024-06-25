import register from "../../API/register";
import { useState, useContext } from "react";
import { LoginContext } from "../../Layout/layout";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Register() {
  const [formdata, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    configPass: "",
  });

  const [loggedIn, setLoggedIn] = useContext(LoginContext);

  const [navigate, setNavigate] = useState(false);
  if (navigate) {
    return <Navigate to={"/host"} />;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formdata.password === formdata.configPass) {
      try {
        const res = await register(formdata);
        if (res) {
          Cookies.set("loggedInUser", formdata.email, { expires: 7 });
          setLoggedIn(res);
          setNavigate(true);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
    }
  };
  if (loggedIn) {
    return <Navigate to='/' />;
  }

  return (
    <main className='grow layout-margin'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          value={formdata.username}
          onChange={handleChange}
          placeholder='Username'
        />

        <input
          type='email'
          name='email'
          value={formdata.email}
          onChange={handleChange}
          placeholder='email'
        />

        <input
          type='password'
          name='password'
          value={formdata.password}
          onChange={handleChange}
          placeholder='password'
        />

        <input
          type='password'
          name='configPass'
          value={formdata.configPass}
          onChange={handleChange}
          placeholder='confirm password'
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </main>
  );
}
