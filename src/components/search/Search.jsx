import React from 'react';
import PropTypes from 'prop-types';
const Search = ({ searchTerm, onChange }) => {
  return ( 
    <label>
      <input 
        style={{ width: '200px' }}
        placeholder="Search by Name"
        type="text"
        value={searchTerm}
        onChange={onChange}
      />
    </label>
  );
};

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Search;
