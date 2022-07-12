import PropTypes from 'prop-types';
import { SpinnerRoundOutlined } from 'spinners-react';
import s from './Loader.module.css';

const Loader = ({ isLoading, size, color }) => (
  <div className={s.Loader}>
    {isLoading && <SpinnerRoundOutlined size={size} color={color} />}
  </div>
);

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Loader;
