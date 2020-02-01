import React, { Component } from 'react'
import { BoxSearchContainer } from './styles';
import iconClose from '../../assets/images/close.png';

export default class BoxSearch extends Component {

    state = {
        text: ''
    }

    handleChangeInput = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        window.location.href = 'consuming-vagalume-api-reactjs/search/' + this.state.text;
    }

    render() {
        return (
            <BoxSearchContainer>
                <button>
                    <img 
                        src={iconClose} 
                        alt="Fechar" 
                        onClick={
                            () => this.props.handleClick() 
                        }
                    />
                </button>

                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="O que você quer ouvir hoje?" 
                        onChange={this.handleChangeInput}
                        autoFocus
                    />
                </form>
            </BoxSearchContainer>
        )
    }
}