import Button from "../../utility-componentes/button";
import vanImage from "../../assets/van.png";
import { useState } from "react";
import login from "../../API/login";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
export default function Login({ setIsLoggedIn }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [navigate, setNavigate] = useState(false);
  if (navigate) {
    return <Navigate to={"/"} />;
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
    try {
      const res = await login(formData);
      if (res) {
        Cookies.set("loggedInUser", formData.email, { expires: 7 });
        setIsLoggedIn(res);
        setNavigate(true);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <main className='grow'>
      <figure className='flex-spacebetween layout-margin item-start mr-l-0'>
        <img src={vanImage} className='login-image' alt='image' />
        <figcaption className='flex-column gap-50'>
          <h1 className='login-form-h1'>Sign in to your account</h1>
          <form className='flex-column' onSubmit={handleSubmit}>
            <div>
              <input
                onChange={handleChange}
                type='email'
                name='email'
                className='form-input display-block'
                placeholder='Email: mohemedryn@gmail.com'
                value={formData.email}
              />
              <input
                onChange={handleChange}
                type='password'
                name='password'
                className='form-input display-block'
                placeholder='Password: rayane1234'
                value={formData.password}
              />
            </div>
            <Button
              text='Sign in'
              background='orange-background'
              color='white-color'
            />
          </form>
        </figcaption>
      </figure>
    </main>
  );
}
