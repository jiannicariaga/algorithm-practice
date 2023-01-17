import React, { useState } from 'react';

export const MixtapeContext = new React.CreateContext();
export const MixtapeProvider = ({ songs, children }) => {
  const [genre, setGenre] = useState('all');
  const [sortOrder, setSortOrder] = useState('ascending');
  return (
    <MixtapeContext.Provider value={{ songs, genre, setGenre, sortOrder, setSortOrder }}>
      {children}
    </MixtapeContext.Provider>
  );
};
