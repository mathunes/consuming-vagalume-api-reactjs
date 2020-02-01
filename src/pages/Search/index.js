import React, { Component } from 'react';
import Header from '../../components/Header';
import { bindActionCreators } from 'redux';
import * as actionsSearch from '../../actions';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import loadingGif from '../../assets/images/loading.gif';
import { Container, SearchContainer, LoadingImage, BackButton } from './styles.js';

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

            this.setState({
                text
            })
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
                container =
                    <LoadingImage>
                        <img src={loadingGif} alt="Carregando"></img>
                    </LoadingImage>
            } else {
                if (this.props.search.data.response !== undefined) {

                    container = 
                        <div>
                            {(this.props.search.data.response.numFound === 0) ? <h2>Não encontrado</h2> : <h2>Resultados para "{this.state.text}"</h2>}
                            <ul>
                                {this.props.search.data.response.docs.map((item, i) => {
                                    return (
                                        <li key={i}>
                                            <h3>Letra</h3>
                                            <Link to={process.env.PUBLIC_URL + '/lyric/id=' + item.id}>
                                                <p>{item.title}</p>
                                                <p>{item.band}</p>    
                                            </Link>
                                        </li>
                                        
                                    )
                                })}
                            </ul>
                        </div>
                }
            }
        }

        return (
            <Container>
                <Header />
                <BackButton onClick={() => this.props.history.goBack()}>Voltar</BackButton>
                <SearchContainer>
                    {container}
                </SearchContainer>
            </Container>
        )
    }

}

const mapStateToProps = state => ({
    search: state.search
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(actionsSearch, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Search);