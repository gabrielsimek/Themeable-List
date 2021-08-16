import React from 'react';
import PropTypes from 'prop-types';

export const Pager = ({ page, perPage, onClick, onChange }) => {

  return (
    <>
      <label htmlFor="perPage">PerPage</label>
      <select 
        onChange={onChange}
        name="perPage" 
        id="perPage"
        value={perPage}
      >
        <option value="10">10</option>
        <option selected value="25">25</option>
        <option value="100">100</option>
      </select>

      <button disabled={page <= 1} onClick={() => onClick(-1)}>-</button>
      <span>{page}</span>
      <button onClick={() => onClick(1)}>+</button>
    </>
  );
};

Pager.propTypes = {
  page: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired

};

export default Pager;
