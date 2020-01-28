import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header>
                <h1>Vagalume</h1>
                <form>
                    <input type="text" placeholder="O que você quer ouvir hoje?" />
                    <button type="submit">Buscar</button>
                </form>
            </header>
        )
    }
}