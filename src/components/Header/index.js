import React, { Component } from 'react';

export default class Header extends Component {
    state = {
        text: "",
    }

    handleChangeInput = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        window.location.href = '/search/' + this.state.text;
        
    }

    render() {

        let container;

        container =
        <div>
            <h1>Vagalume</h1>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="O que você quer ouvir hoje?" onChange={this.handleChangeInput}/>
                <button type="submit">Buscar</button>
            </form>
        </div>

        return (
            <header>
                {container}
            </header>
        )
    }
}