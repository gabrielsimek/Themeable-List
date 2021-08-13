import React from 'react';
import PropTypes from 'prop-types';

const CharacterItem = ({ name, image }) => {
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
