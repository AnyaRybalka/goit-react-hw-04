import Modal from "react-modal";
import PropTypes from 'prop-types';
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ModalWindow({ image, isOpen, onClose }) {
  return (
    <Modal
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
    >
      {image && (
        <div className={css.wrapper}>
          {image.urls && image.urls.regular && (
            <img
              className={css.image}
              src={image.urls.regular}
              alt={image.description}
              onClick={onClose}
            />
          )}
          {image.description && (
            <p className={css.description}>{image.description}</p>
          )}
          {image.user && image.user.name && (
            <p className={css.text}>
              Author: <span className={css.span}>{image.user.name}</span>
            </p>
          )}
          {image.likes !== undefined && (
            <p className={css.text}>
              Likes: <span className={css.span}>{image.likes}</span>
            </p>
          )}
        </div>
      )}
    </Modal>
  );
}

ModalWindow.propTypes = {
  image: PropTypes.shape({
    urls: PropTypes.shape({
      regular: PropTypes.string,
    }),
    description: PropTypes.string,
    user: PropTypes.shape({
      name: PropTypes.string,
    }),
    likes: PropTypes.number,
  }),
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
