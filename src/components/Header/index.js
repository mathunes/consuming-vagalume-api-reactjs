import React, { Component } from 'react';
import { HeaderContainer } from './styles';
import logoVagalume from '../../assets/images/logo.png';
import iconSearchWhite from '../../assets/images/search-white.png';
import iconSearchYellow from '../../assets/images/search-yellow.png';

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

        return (
            <HeaderContainer>
                <img src={logoVagalume} alt="Logo vagalume" />
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="O que você quer ouvir hoje?" onChange={this.handleChangeInput}/>
                    <button type="submit">
                        <img src={iconSearchWhite} alt="Buscar" />
                        <img src={iconSearchYellow} alt="Buscar" />
                    </button>
                </form>
            </HeaderContainer>
        )
    }
}