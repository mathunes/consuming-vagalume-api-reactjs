import React, { Component } from 'react';
import Header from '../../components/Header';
import { bindActionCreators } from 'redux';
import * as actionsSearch from '../../actions';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

class Search extends Component {

    state = {
        noText: false,
        text: '',
        search: false
    }

    validateURL() {
        if (this.props.match.params.text === undefined) {
            this.setState({
                noText: true
            })
        }
    }

    componentDidMount() {
        this.validateURL();

        let text = this.props.match.params.text;
        
        if (!this.state.search) {
            this.search(text);
        }
    }

    search(text = "") {

        this.setState({
            search: true
        })

        this.props.searchMusicArtist(text);
        
    }

    render() {
        
        let container;

        if (this.state.noText) {
            container = <Redirect to="/" />
        } else {
            if (this.props.search.loading) {
                container = <h1>Carregando</h1>
            } else {
                if (this.props.search.data.response !== undefined) {

                    container = 
                        <ul>
                            {console.log(this.props.search.data)}
                            {this.props.search.data.response.docs.map((item, i) => {
                                let { id } = item;
                                console.log(item);
                                return (
                                    <li key={i}>
                                        <p>{(id[0] === 'b' ) ? 'Artista' : 'Letra'}</p>
                                        <p>{(id[0] === 'l' ) ? item.title : ''}</p>
                                        <p>{item.band}</p>
                                        <Link to={'music' + item.url} target="_blank">Letra</Link>
                                    </li>
                                    
                                )
                            })}
                        </ul>
                }
            }
        }

        return (
            <div>
                <Header />
                {container}
            </div>
        )
    }

}

const mapStateToProps = state => ({
    search: state.search
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(actionsSearch, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Search);