import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as searchActions from '../../actions';
import { connect } from 'react-redux';

class Header extends Component {
    state = {
        text: ""
    }

    handleChangeInput = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.searchMusicArtist(this.state.text);
    }

    render() {
        return (
            <header>
                <h1>Vagalume</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="O que você quer ouvir hoje?" onChange={this.handleChangeInput}/>
                    <button type="submit">Buscar</button>
                </form>
            </header>
        )
    }
}

const mapStateToProps = state => ({
    search: state.search
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(searchActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Header);