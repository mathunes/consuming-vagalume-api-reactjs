import React, { Component } from 'react';
import Header from '../../components/Header';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actionSearchLyric from '../../actions';
import { connect } from 'react-redux';

class Lyric extends Component {

    state = {
        noId: false,
        id: ''
    }

    validateURL() {
        if (this.props.match.params.id === undefined) {
            this.setState({
                noId: true
            })
        }
    }

    search(id) {
        this.props.searchLyric(id);
    }

    componentDidMount() {
        this.validateURL();

        let id = this.props.match.params.id;
        
        this.setState({
            id
        })

        this.search(id);
        
    }

    render() {

        console.log(this.props)

        let container;

        if (this.state.noId) {
            container = <Redirect to="/" />
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
    search: state.searchLyric
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(actionSearchLyric, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Lyric);