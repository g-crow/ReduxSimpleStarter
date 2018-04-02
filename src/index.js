import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyDvc6k7qH0daF939_58z1JrMmi1K7WplHs';

// Create a new component. This component produces HTML.

 const App = () => {
   return <SearchBar />
 }

// Take this component's generated HTML and put it on the page.

ReactDOM.render(<App />, document.querySelector('.container'))
