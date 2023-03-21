/*---- Imported components ----*/
import Modal from 'react-bootstrap/Modal';
import ModalSlider from './ModalSlider';

/*---- Component ----*/
const GalleryModal = ({ show, onHide, title, gallery }) => {
	return (
		<Modal {...{ show, onHide }} size='xl' aria-labelledby='contained-modal-title-vcenter' centered>
			<Modal.Header closeButton></Modal.Header>
			<Modal.Body>
				<ModalSlider slides={gallery} />
			</Modal.Body>
			<Modal.Header>
				<Modal.Title id='contained-modal-title-vcenter'>
					<h4> {title} </h4>
				</Modal.Title>
			</Modal.Header>
		</Modal>
	);
};

export default GalleryModal;
