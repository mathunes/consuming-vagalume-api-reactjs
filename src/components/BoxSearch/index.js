import React, { Component } from 'react'
import { BoxSearchContainer } from './styles';
import iconClose from '../../assets/images/close.png';

export default class BoxSearch extends Component {
    render() {
        return (
            <BoxSearchContainer>
                <button>
                    <img src={iconClose} alt="Fechar" onClick={() => this.props.handleClick() }/>
                </button>

                <form>
                    <input type="text" placeholder="O que você quer ouvir hoje?" autoFocus/>
                </form>
            </BoxSearchContainer>
        )
    }
}