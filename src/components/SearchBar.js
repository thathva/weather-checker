import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  fetchWeather  from '../actions/index'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {term: '',darkMode: false}
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormChange = this.onFormChange.bind(this);
    }

    onInputChange(event) {
        this.setState({term:event.target.value})
    }

    onFormChange(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term)
    }

    render() {
        return(
            <div className="ui right aligned category search">
                <form className="ui icon input" onSubmit={this.onFormChange}>
                    <input className="prompt" value={this.state.term} onChange={this.onInputChange}>
                    </input>
                    <i className="search icon"></i>
                </form>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather},dispatch)
}

export default connect(null,mapDispatchToProps)(SearchBar)