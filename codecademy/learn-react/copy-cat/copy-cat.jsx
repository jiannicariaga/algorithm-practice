import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};

export class CopyCat extends React.Component {
  render() {
    const { copying, toggleTape, input, handleChange } = this.props;
    return (
      <div style={styles.divStyles}>
        <h1 style={{ marginBottom: 80 }}>Copy Cat</h1>
        <input
          type='text'
          value={input}
          onChange={handleChange} />
        <img
          alt='cat'
          src={copying ? images.copycat : images.quietcat}
          onClick={toggleTape}
          style={styles.imgStyles} />
        <p>{copying && input}</p>
      </div>
    );
  }
}

CopyCat.propTypes = {
  copying: PropTypes.bool.isRequired,
  toggleTape: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};
