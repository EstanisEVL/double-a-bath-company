import { useState } from "react";

export const useForm = ( initialForm, formValidations ) => {
  const [ form, setForm ] = useState(initialForm);
  const [ errors, setErrors ] = useState({});

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