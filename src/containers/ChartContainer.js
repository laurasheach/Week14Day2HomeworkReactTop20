import React, {Component} from 'react';
import SongList from '../components/SongList.js'

class ChartContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      songs: [],
      currentSong: null
    };
  }

  componentDidMount(){
    console.log("Mount");
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
    fetch(url)
    .then(res => res.json())
    .then(songs => this.setState({songs:songs.feed.entry}))
    .catch(err => console.error)
  }

  render(){
    return(
      <div>
      <h1>UK TOP 20</h1>
      <SongList songs={this.state.songs}/>
      </div>
    )
  }

}

export default ChartContainer;
