import React from 'react';
import PropTypes from 'prop-types';
import { ButtonSearch } from './Button.styled';
import { Box } from 'components/Box';

const Button = ({ onClick, children }) => {
  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <ButtonSearch type="button" onClick={onClick}>
        {children}
        Load more
      </ButtonSearch>
    </Box>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.element,
};

export default Button;
