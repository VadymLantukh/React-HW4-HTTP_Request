import { PropagateLoader } from 'react-spinners';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loaderBox}>
      <PropagateLoader color="#f5e61c" />
    </div>
  );
};
export default Loader;
