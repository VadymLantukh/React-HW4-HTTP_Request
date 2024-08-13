import ReactModal from 'react-modal';

const customStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
    width: 'auto',
    height: 'auto',
    maxWidth: '90vw',
    maxHeight: '90vh',
    border: 'none',
  },
};

ReactModal.setAppElement('#root');

export const ImageModal = ({ openModal, closeModal, urls, alt }) => {
  return (
    <ReactModal
      isOpen={openModal}
      onRequestClose={closeModal}
      style={customStyle}
    >
      <img src={urls} alt={alt} />
    </ReactModal>
  );
};
