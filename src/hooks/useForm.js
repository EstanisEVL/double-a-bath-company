import { useState } from 'react';

/*---- Imported resources ----*/
import Swal from 'sweetalert2';

/*---- Custom hook ----*/
const useForm = (initialForm, formValidations) => {
	const [form, setForm] = useState(initialForm);
	const [errors, setErrors] = useState({});
	const showAlert = () => {
		Swal.fire({
			position: 'center',
			icon: 'success',
			title: "Thanks! We'll be getting back to you soon!",
			showConfirmButton: false,
			timer: 3000,
		});
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		handleChange(e);
		setErrors(formValidations(form));
		if (Object.keys(errors).length === 0) {
			if (Object.values(form).every((x) => x !== '')) {
				showAlert();
			}
			setForm(initialForm);
		} else {
			return;
		}
	};
	return {
		form,
		errors,
		handleChange,
		handleSubmit,
	};
};

export default useForm;
