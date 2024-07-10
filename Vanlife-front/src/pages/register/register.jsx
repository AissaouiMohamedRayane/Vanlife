import register from "../../API/register";
import { useState, useContext } from "react";
import { LoginContext } from "../../Layout/layout";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import Button from "../../utility-componentes/button";

export default function Register() {
  const [formdata, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    configPass: "",
  });

  const [falsePass, setFalsePass] = useState(false);

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
      setFalsePass(true);
    }
  };
  if (loggedIn) {
    return <Navigate to='/' />;
  }

  return (
    <main className='grow layout-margin'>
      <form className='flex-column gap-5' onSubmit={handleSubmit}>
        <input
          className='register-form-element'
          type='text'
          name='username'
          value={formdata.username}
          onChange={handleChange}
          placeholder='Username'
        />

        <input
          className='register-form-element'
          type='email'
          name='email'
          value={formdata.email}
          onChange={handleChange}
          placeholder='email'
        />

        <input
          className='register-form-element'
          type='password'
          name='password'
          value={formdata.password}
          onChange={handleChange}
          placeholder='password'
        />
        {falsePass && <div className='red'>false</div>}
        <input
          className='register-form-element'
          type='password'
          name='configPass'
          value={formdata.configPass}
          onChange={handleChange}
          placeholder='confirm password'
        />
        <br />
        <br />
        <Button
          color='white-color'
          background='orange-background'
          text='Submit'
          buttonClasses='mr-t-20 hover'
        />
      </form>
    </main>
  );
}
