import React, { Component } from 'react'
import { BoxSearchContainer } from './styles';

export default class BoxSearch extends Component {
    render() {
        return (
            <BoxSearchContainer>
                <button>Fechar</button>
                <h1>oi</h1>
                <form>
                    <input type="text" placeholder="O que você quer ouvir hoje?" />
                </form>
            </BoxSearchContainer>
        )
    }
}