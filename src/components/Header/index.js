import React, { Component } from 'react';
import { HeaderContainer } from './styles';
import logoVagalume from '../../assets/images/logo.png';
import iconSearchWhite from '../../assets/images/search-white.png';
import iconSearchYellow from '../../assets/images/search-yellow.png';
import BoxSearch from '../BoxSearch';

export default class Header extends Component {
    state = {
        text: "",
        search: false
    }

    handleChangeInput = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({
            search: true,
        })

        // window.location.href = '/search/' + this.state.text;
        
    }

    render() {

        return (
            <HeaderContainer>
                {this.state.search ? <BoxSearch /> : ''}
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