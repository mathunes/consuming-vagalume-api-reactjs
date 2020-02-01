import React, { Component } from 'react';
import { HeaderContainer } from './styles';
import logoVagalume from '../../assets/images/logo.png';
import iconSearchWhite from '../../assets/images/search-white.png';
import iconSearchYellow from '../../assets/images/search-yellow.png';
import BoxSearch from '../BoxSearch';
import { Link } from 'react-router-dom';

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

    handleClick = (e) => {
        e.preventDefault();

        this.setState({
            search: true
        })
        
    }

    handleChildClick() {
        this.setState({
            search: false
        })
    }

    render() {

        return (
            <div>
                {this.state.search ? <BoxSearch handleClick={this.handleChildClick.bind(this)}/> : ''}
                <HeaderContainer>
                    <Link to={process.env.PUBLIC_URL + '/'}>
                        <img src={logoVagalume} alt="Logo vagalume" />
                    </Link>

                    <form onClick={this.handleClick}>
                        <input type="text" placeholder="O que você quer ouvir hoje?" onChange={this.handleChangeInput}/>

                        <button type="submit">
                            <img src={iconSearchWhite} alt="Buscar" />
                            <img src={iconSearchYellow} alt="Buscar" />
                        </button>
                    </form>
                </HeaderContainer>
            </div>
        )
    }
}