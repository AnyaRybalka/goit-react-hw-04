
import PropTypes from 'prop-types';
import css from "./LoadMoreBtn.module.css";
export default function LoadMoreBtn({ loadMore }) {
  return (
    <button className={css.button} onClick={() => loadMore()}>
      Load more
    </button>
  );
}
LoadMoreBtn.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
