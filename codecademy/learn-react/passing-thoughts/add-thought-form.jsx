import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export const AddThoughtForm = props => {
  const { addThought } = props;
  const [text, setText] = useState('');

  const handleTextChange = event => {
    setText(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!text) return;
    addThought({
      id: generateId(),
      text,
      expiresAt: getNewExpirationTime()
    });
    setText('');
  };

  return (
    <form
      className='AddThoughtForm'
      onSubmit={handleSubmit} >
      <input
        type='text'
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleTextChange} />
      <input type='submit' />
    </form>
  );
};
