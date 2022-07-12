import PropTypes from 'prop-types';
import { SpinnerRoundOutlined } from 'spinners-react';
import { Box } from 'components/Box';

const Loader = ({ isLoading, size, color }) => (
  <Box display="flex" alignItems="center" flexDirection="column">
    {isLoading && <SpinnerRoundOutlined size={size} color={color} />}
  </Box>
);

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Loader;
