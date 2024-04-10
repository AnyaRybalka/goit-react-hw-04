import PropTypes from 'prop-types';
import css from "./ImageCard.module.css";

export default function ImageCard({ image, onClick }) {
  return (
    <div className={css.wrapper} onClick={onClick}>
      <img
        className={css.image}
        src={image.urls.small}
        alt={image.description}
      />
    </div>
  );
}
ImageCard.propTypes = {
  image: PropTypes.shape({
    urls: PropTypes.shape({
      small: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func,
};

