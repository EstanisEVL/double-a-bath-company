/*---- Imported hooks ----*/
import { useForm } from '../../hooks/useForm';

/*---- Imported components ----*/
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const initialForm = {
  firstName: '',
  lastName: '',
  phone: '', 
  email: '',
  comment: ''
}

const formValidations = ( form ) => {
  let errors = {};
  let emailRegEx = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  if(!form.firstName.trim()) {
    errors.firstName = 'First Name cannot be empty';
  };

  if(!form.lastName.trim()) {
    errors.lastName = 'Last Name cannot be empty';
  };

  if(!form.phone.trim()) {
    errors.phone = 'Phone cannot be empty';
  };

  if(!form.email.trim()) {
    errors.email = 'Email Address cannot be empty';
  } else if (!emailRegEx.test(form.email.trim())) {
    errors.email = 'Looks like this is not an email';
  };

  if(!form.comment.trim()) {
    errors.comment = 'Please tell us about your project';
  };
  return errors;
}
const Contact = () => {

  const {
    form,
    errors,
    handleChange,
    handleSubmit
  } = useForm(initialForm, formValidations);

	return (
		<div
      className='contact-section--container'>
			<h2
        variant='h2'
        className='contact-section--title'
        >
				BATHROOM REMODELING CONSULTATION
			</h2>
			<Form
        onSubmit={ handleSubmit }
        className='contact-form'
        >
				<div
          className='contact-form--field'>
					<Form.Group
            className='form-field--container'>
						<Form.Label
              className='form-field--label'>
                Name
            </Form.Label>
						<div
              className='form-field--input-container'>
                <Form.Control
                  type='text'
                  name='firstName'
                  placeholder='First' 
                  className={`input ${ errors.firstName && 'input-error'}`}
                  onChange={ handleChange }
                  value={ form.firstName }
                />
                {
                  errors.firstName && <p className='error-msg'>{ errors.firstName }</p>
                }
						</div>
					</Form.Group>

					<Form.Group
            className='form-field--container'>
						<Form.Label className='form-field--label last-name-label'>Last name</Form.Label>
						<div className='form-field--input-container'>
							<Form.Control
              type='text'
              name='lastName'
              placeholder='Last'
              className={`input ${ errors.lastName && 'input-error'}`}
              onChange={ handleChange }
              value={ form.lastName }
              />
              {
                errors.lastName && <p className='error-msg'>{ errors.lastName }</p>
              }
						</div>
					</Form.Group>
				</div>

				<div className='contact-form--field'>
					<Form.Group
            className='form-field--container'>
						<Form.Label className='form-field--label'>Phone</Form.Label>
						<div className='form-field--input-container'>
							<Form.Control
              type='number'
              name='phone'
              placeholder='(___) _____-______'
              className={`input ${ errors.phone && 'input-error'}`}
              onChange={ handleChange }
              value={ form.phone }
              />
              {
                errors.phone && <p className='error-msg'>{ errors.phone }</p>
              }
						</div>
					</Form.Group>
					<Form.Group
            className='form-field--container'>
						<Form.Label className='form-field--label'>E-mail</Form.Label>
						<div
              className='form-field--input-container'
              >
                <Form.Control
                type='text'
                name='email'
                placeholder='name@example.com'
                className={`input ${ errors.email && 'input-error'}`}
                onChange={ handleChange }
                value={ form.email }
                />
                {
                errors.email &&
                <p className='error-msg'> { errors.email }</p>
                }
						</div>
					</Form.Group>
				</div>

				<Form.Group
          className='text-area--container'
          >
            <Form.Label
              className='text-area--label'
              >
                Tell us about your project
            </Form.Label>
					<div
            className='text-area--input-container'
            >
              <Form.Control
                type='text'
                name='comment'
                placeholder='Type something...'
                as='textarea'
                rows={9}
                className={`text-area--input ${ errors.comment && 'input-error'}`}
                onChange={ handleChange }
                value={ form.comment }
              />
              {
                errors.comment &&
                <p className='error-msg'>{ errors.comment }</p>
              }
					</div>
				</Form.Group>
				
        <div
          className='contact-form--btn-container'>
            <Button
              className='contact-form--btn'
              type='submit'
            >
              Submit
            </Button>
				</div>
			</Form>
		</div>
	);
};

export default Contact;
