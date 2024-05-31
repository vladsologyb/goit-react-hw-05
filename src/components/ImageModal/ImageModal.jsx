import ReactModal from 'react-modal';

export default function ImageModal({ openModal, CloseModal, id }) {
     ReactModal.setAppElement('#root')
        return (
                <>
                <div>
                    <ReactModal
                        isOpen={openModal}
                        onRequestClose={CloseModal}
                        shouldCloseOnOverlayClick={true}
                        shouldCloseOnEsc={true}
                        style={{
                            content: {
                            top: '35%',
                            left: '50%',
                            transform: 'translate(-35%, -35%)',
                            border: 'none',
                            background: 'transparent',
                            overflow: 'visible',
                        },
                        overlay: {
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            backgroundColor: 'rgb(0, 0, 0, 0.5)',
                        border: 'none'}
                        }}
                    >
                        <img
                                width='650'

                                src={id}
                                alt='img'
                            />
                    </ReactModal>     
                        
                    
                </div> 
                </>
    );
}
