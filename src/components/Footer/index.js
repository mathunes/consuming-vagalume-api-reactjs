import React, { Component } from 'react';
import { FooterContainer } from './styles.js';

export default class Footer extends Component {
    render() {
        return (
            <FooterContainer>
                <span>Dados disponibilizados pela API do <a href="https://api.vagalume.com.br/">Vagalume</a></span>
            </FooterContainer>
        )
    }
}