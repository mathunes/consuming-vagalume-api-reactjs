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

    componentDidMount() {
        this.validateURL();

        // let text = this.props.match.params.text;
        
        // if (!this.state.search) {
        //     this.search(text);
        // }
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