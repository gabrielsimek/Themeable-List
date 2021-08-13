import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CharacterItem = ({ name, image }) => {
  // const [something, setSomething] = useState('');
  return (
    <figure>
      <img src={image} alt={name}/>
      <figcaption>
        <h2>{name}</h2>
      </figcaption>
    </figure>
  );
};

CharacterItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default CharacterItem;
