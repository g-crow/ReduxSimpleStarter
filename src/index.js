import _ from 'lodash'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyDvc6k7qH0daF939_58z1JrMmi1K7WplHs';

 class App extends Component {
   constructor(props) {
     super(props)

     this.state = {
       videos: [],
       selectedVideo: null
     }
     this.videoSearch('kirk richardson')
   }

   videoSearch(term) {
     YTSearch({key: API_KEY, term: term}, (videos) => {
       this.setState({
         videos: videos,
         selectedVideo: videos[0]
        })
     })
   }

   render() {
     // throttled serarch, function can only run every 300 milliseceonds
     const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)

     return (
       <div>
         <SearchBar onSearchTermChange={videoSearch} />
         <VideoDetail video={this.state.selectedVideo} />
         <VideoList videos={this.state.videos}
           onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
       </div>
     )
   }
 }

// Take this component's generated HTML and put it on the page.

ReactDOM.render(<App />, document.querySelector('.container'))
