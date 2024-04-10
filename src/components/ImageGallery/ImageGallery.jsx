import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

export default function ImageGallery({ items, openModal }) {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard image={item} onClick={() => openModal(item)} />
        </li>
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object), 
  openModal: PropTypes.func.isRequired, 
};
