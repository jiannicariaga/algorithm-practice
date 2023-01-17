import React, { useContext } from 'react';
import { MixtapeContext } from './mixtape-context';
import { Song } from './song';

export const SongList = () => {
  const { songs, genre, sortOrder } = useContext(MixtapeContext);
  return (
    <>
      {
        songs.filter(song => genre === 'all' || song.genre === genre)
          .sort((a, b) => sortOrder === 'ascending' ? a.year - b.year : b.year - a.year)
          .map(song => <Song {...song} key={song.name} />)
      }
    </>
  );
};
