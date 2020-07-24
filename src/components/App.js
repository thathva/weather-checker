import React from 'react';
import SearchBar from './SearchBar'
import WeatherList from './WeatherList'

class App extends React.Component {
    render() {
        return(
            <div>
                <SearchBar/>
                <WeatherList/>
            </div>
        )
    }
}

export default App;