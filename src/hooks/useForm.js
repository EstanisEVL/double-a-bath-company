import { useState } from "react";

import Swal from 'sweetalert2';

export const useForm = ( initialForm, formValidations ) => {
  const [ form, setForm ] = useState(initialForm);
  const [ errors, setErrors ] = useState({});

  const showAlert = () => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Thanks! We\'ll be getting back to you soon!',
      showConfirmButton: false,
      timer: 3000
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [ name ]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleChange(e);
    setErrors(formValidations(form));
    showAlert();
    
    if(Object.keys(errors).length === 0) {
      setForm(initialForm);
    } else {
      return;
    };
    
  };

  return {
    form,
    errors,
    handleChange,
    handleSubmit
  };
};