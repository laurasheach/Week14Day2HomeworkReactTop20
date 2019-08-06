import React, {Component} from 'react';

const SongSelector = (props) => {

  const options = props.songs.map((song, index) => {
    return(
      <div>
        <h2 value={index} key={index}>{index += 1}. {song["title"].label}</h2>
      </div>
    )
  });

  return(
    <div>
      <h2>{options}</h2>
    </div>
  )

}

export default SongSelector;
