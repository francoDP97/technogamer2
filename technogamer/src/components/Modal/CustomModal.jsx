
import Modal from 'react-bootstrap/Modal';

function CustomModal({ contenido, ...props }) {
    return (
        <Modal
            {...props}
            size="lg" top
            className='mt-5'
        >
            <Modal.Body className='p-0'>
                {contenido}
            </Modal.Body>
        </Modal>
    );
}


export default CustomModal;