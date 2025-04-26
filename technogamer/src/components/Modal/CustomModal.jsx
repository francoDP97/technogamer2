import Modal from 'react-bootstrap/Modal';

function CustomModal({ contenido, cruz, visible, onHide, ...props }) {
    return (
        <Modal
            {...props}
            show={visible}     // <-- Controlar si se muestra
            onHide={onHide}     // <-- Cerrar modal
            size="lg"
            centered
            className="mt-5"
        >
            <Modal.Header closeButton className={cruz ? 'd-flex' : 'd-none'}  >
                <Modal.Title
                    id="contained-modal-title-vcenter"
                >
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-0">
                {contenido}
            </Modal.Body>
        </Modal>
    );
}

export default CustomModal;
