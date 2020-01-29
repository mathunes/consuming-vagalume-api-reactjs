import React, { Component } from 'react';
import Header from '../../components/Header';
import { bindActionCreators } from 'redux';
import * as actionsSearch from '../../actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Search extends Component {

    state = {
        noText: false
    }

    validateURL() {
        if (this.props.match.params.text === undefined) {
            this.setState({
                noText: true
            })
        }
    }

    componentDidMount() {
        this.validateURL();
    }

    render() {
        
        let container;

        if (this.state.noText) {
            container = <Redirect to="/" />
        } else {
            console.log()
        }

        return (
            <div>
                <Header />
                {container}
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