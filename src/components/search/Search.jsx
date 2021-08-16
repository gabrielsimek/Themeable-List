import React from 'react';
import PropTypes from 'prop-types';
const Search = ({ searchTerm, onChange }) => {
  return ( 
    <label>
      <input 
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
