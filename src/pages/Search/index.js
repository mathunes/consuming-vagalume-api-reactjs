import React, { Component } from 'react';
import Header from '../../components/Header';
import { bindActionCreators } from 'redux';
import * as actionsSearch from '../../actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Search extends Component {

    state = {
        noText: false,
        text: '',
        search: false
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

        let text = this.props.match.params.text;
        console.log(text);
        if (!this.state.search) {
            this.search(text);
        }
    }

    search(text = "") {

        this.setState({
            search: true
        })

        this.props.searchMusicArtist(text);
        
    }

    componentDidUpdate() {
        
        let text = this.props.match.params.text;
        console.log(text);
        if (!this.state.search) {
            this.search(text);
        }
    }

    render() {
        
        let container;

        console.log(this.props)

        // if (this.state.noText) {
        //     container = <Redirect to="/" />
        // } else {
        //     if (this.props.search.loading) {
        //         container = <h1>Carregando</h1>
        //     } else {
        //         // console.log(this.props.search.data.response)
        //  
        //     }
        // }

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