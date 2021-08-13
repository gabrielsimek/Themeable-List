import React from 'react';
import PropTypes from 'prop-types';

export const Pager = ({ page, onChange }) => {

  return (
    <>
      <button disabled={page <= 1} onClick={() => onChange(-1)}>-</button>
      <span>{page}</span>
      <button onClick={() => onChange(1)}>+</button>
    </>
  );
};

Pager.propTypes = {
  page: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,

};

export default Pager;
