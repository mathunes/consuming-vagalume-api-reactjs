import React, { Component } from 'react';
import Header from '../../components/Header';

class Search extends Component {

    getTextURL() {
        console.log(this.props.match.params)
    }

    render() {
        
        this.getTextURL();

        return (
            <div>
                <Header />
                
            </div>
        )
    }
}

export default Search;