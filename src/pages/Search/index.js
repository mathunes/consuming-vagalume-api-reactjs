import React, { Component } from 'react';
import Header from '../../components/Header';
import { bindActionCreators } from 'redux';
import * as actionsSearch from '../../actions';
import { connect } from 'react-redux';

class Search extends Component {

    getTextURL() {
        console.log(this.props.match.params.text)
        console.log(this.props);
    }

    componentDidUpdate() {
        
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

const mapStateToProps = state => ({
    search: state.search
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(actionsSearch, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Search);