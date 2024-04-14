import PropTypes from 'prop-types';
import css from "./ImageCard.module.css";

export default function ImageCard({ image, onClick }) {
  const handleClick = (event) => {
    onClick(event);
  };

  return (
    <div className={css.wrapper}>
      <img
        className={css.image}
        src={image.urls.small}
        alt={image.description}
        onClick={handleClick}
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
  onClick: PropTypes.func.isRequired,
};


