import React, { Component } from 'react';
import Header from '../../components/Header';
import { Redirect } from 'react-router-dom';

export default class Lyrics extends Component {

    state = {
        noId: false,
        text: '',
    }

    validateURL() {
        console.log(this.props.match.params.id);
        if (this.props.match.params.id === undefined) {
            this.setState({
                noId: true
            })
        }
    }

    search(id) {
        
    }

    componentDidMount() {
        this.validateURL();

        let id = this.props.match.params.id;
        
        this.search(id);
        
    }

    render() {

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