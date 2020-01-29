import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as searchActions from '../../actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Header extends Component {
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
                search: true
            })
            
        
        
    }

    render() {

        let container;

        if (this.state.search) {
            container =
                <div>
                    <Header />
                    <Redirect to={'/search/' + this.state.text} />
                </div>
        } else {
            container =
            <div>
                <h1>Vagalume</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="O que você quer ouvir hoje?" onChange={this.handleChangeInput}/>
                    <button type="submit">Buscar</button>
                </form>
            </div>
        }

        return (
            <header>
                {container}
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