import React, { Component } from 'react';
import _ from 'lodash';


class YouTube extends Component {
  render() {
    var videoSrc = "https://www.youtube.com/embed/" + 
        this.props.video + "?autoplay=" + 
        this.props.autoplay + "&rel=" + 
        this.props.rel + "&modestbranding=" +
        this.props.modest;
    return (
      <div className="videoWrapper">
        <iframe className="player" type="text/html" width="100%" height="auto" title= {videoSrc}
      src={videoSrc}
      frameBorder="3"/>
          </div>
    );
  }
}

class MusicPage extends Component {
  constructor(props) {
    super(props);
    this.state = {videos: []};
  }

  componentWillMount() {
    this.VideosList();
  }

  VideosList() {
    var url ='https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCA95A2hb8QPRTeV9C74uToQ&maxResults=10&order=date&type=video&key=AIzaSyDEwr0n0SB2Etm0GEjGsTrYOVvPafAfysQ';
    fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then( (json) => {
        this.setState({
           videos: json.items
        })
        //console.log('parsed json', json)
    }).catch(function(err) {
    });
  }


  render() {
    console.log(this.state.videos);
    var videos = _.map(this.state.videos, (video) => {
      //console.log(video.id.videoId)
      return (
            <div className="video1" key={video.id.videoId}>
              <div>
                <div className="descriptionL">
                  <YouTube video={video.id.videoId} autoplay="0" rel="0" modest="1" />
                </div>
                <div className="descriptionR">
                <div>
                  <h3 className="descriptionTitle">{video.snippet.title} </h3>
                </div>
                    <p > {video.snippet.description}</p>
                </div>
              </div>  
            <div className="video2">
            </div>
            <hr/>
            </div>
            )
    });
    return (
            <div className="content-music">
              <div className="container">

            <hr/>{videos}

          </div>
        </div>

    );
  }
}

export default MusicPage;
