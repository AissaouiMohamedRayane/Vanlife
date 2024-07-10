import { useState, useEffect } from "react";
import editApi from "../../API/editVan";
import { Navigate, useParams } from "react-router-dom";
import getVan from "../../API/getVan";
import Button from "../../utility-componentes/button";
export default function Edit(props) {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: props.name || "",
    price: parseFloat(props.price) || 0,
  });

  useEffect(() => {
    if (!props.name || !props.price) {
      const fetchData = async () => {
        const van = await getVan(id);
        console.log(van);
        setFormData({
          id: van.id,
          name: van.name,
          price: van.price,
          image: van.image,
          type: van.type,
          description: van.description,
          date_added: van.date_added,
          user: van.user,
        });
      };

      fetchData();
    }
  }, []);

  const [redirect, setRedirect] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "price" ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await editApi(formData, id);
      if (res) {
        setRedirect(true);
      }
    } catch (error) {
      console.error(error);
    }
  };
  if (redirect) {
    return <Navigate to='../' />;
  }

  return (
    <main className='grow layout-margin'>
      <form className='flex-column gap-5' onSubmit={handleSubmit}>
        <input
          className='register-form-element'
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='name'
        />

        <input
          className='register-form-element'
          type='number'
          name='price'
          value={formData.price}
          onChange={handleChange}
          placeholder='price'
        />

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
