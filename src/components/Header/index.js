import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { searchMusicArtist } from '../../actions';
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

        console.log(this.state);
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
    bindActionCreators(searchMusicArtist)

export default connect(mapStateToProps, mapDispatchToProps)(Header);