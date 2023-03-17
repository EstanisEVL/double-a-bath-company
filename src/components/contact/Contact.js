import { Typography } from '@mui/material';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact() {
	return (
		<div className='container'>
			<Typography variant='h3' className='title'>
				BATHROOM REMODELING CONSULTATION
			</Typography>
			<Form>
				<div className='conteinerInput'>
					<Form.Group className='group'>
						<Form.Label className='label'>Name</Form.Label>
						<div className='conteInput'>
							<Form.Control className='input' type='text' placeholder='Enter your name' />
						</div>
					</Form.Group>
					<Form.Group className='group'>
						<Form.Label className='label'>Last name</Form.Label>
						<div className='conteInput'>
							<Form.Control className='input' type='text' placeholder='Enter your last name' />
						</div>
					</Form.Group>
				</div>
				<div className='conteinerInput'>
					<Form.Group className='group'>
						<Form.Label className='label'>Phone</Form.Label>
						<div className='conteInput'>
							<Form.Control className='input' type='number' placeholder='(___) _____-______' />
						</div>
					</Form.Group>
					<Form.Group className='group'>
						<Form.Label className='label'>E-mail</Form.Label>
						<div className='conteInput'>
							<Form.Control className='input' type='email' placeholder='name@example.com' />
						</div>
					</Form.Group>
				</div>
				<Form.Group>
					<Form.Label className='labelTa'>Tell us about your project</Form.Label>
					<div className='conteInput'>
						<Form.Control className='inputTa' as='textarea' rows={5} placeholder='Type something...' />
					</div>
				</Form.Group>
				<div className='conteBtn'>
					<Button className='btnContact' type='submit'>
						Submit
					</Button>
				</div>
			</Form>
		</div>
	);
}

export default Contact;
