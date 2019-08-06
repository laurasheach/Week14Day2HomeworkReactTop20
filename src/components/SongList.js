import React from 'react';

const SongList = (props) => {

  const options = props.songs.map((song, index) => {
    return(
      <li value={index += 1} key={index}>
        {song["im:name"].label} - {song["im:artist"].label}
      </li>
    )
  });


  return(
    <div className="top-20">

      <ol>{options}</ol>

    </div>
  )

}

export default SongList;
