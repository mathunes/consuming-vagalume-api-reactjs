import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchActions from '../../actions';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { MainContainer, CardsContainer, CardContainer, Ordinal } from './styles';

class Main extends Component {

    componentDidMount() {
        this.props.searchRanking()
    }

    render() {

        let container;

        if (this.props.search.searchRanking) {
            let {mus, art, alb} = this.props.search.dataRanking;

            container = 
                <CardsContainer>
                    <CardContainer>
                        <h2>Músicas</h2>
                        <ol>
                        {(mus.month.all).map((item, i) => {
                            return (
                                <li key={i}>
                                    <Ordinal>{i+1 + '°'}</Ordinal>
                                    <div>
                                        <p>{item.name}</p>
                                        <p>{item.art.name}</p>
                                    </div>
                                </li>
                            )
                        })}
                        </ol>
                        <Link to="/top100/musics">Ver o top 100 músicas</Link>
                    </CardContainer>

                    <CardContainer>
                        <h2>Artistas</h2>
                        <ol>
                        {(art.month.all).map((item, i) => {
                            return (
                                <li key={i}>
                                    <Ordinal>{i+1 + '°'}</Ordinal>
                                    <div>
                                        <p>{item.name}</p>
                                    </div>
                                </li>
                            )
                        })}
                        </ol>
                        <Link to="/top100/artists">Ver o top 100 artistas</Link>
                    </CardContainer>

                    <CardContainer>
                        <h2>Álbum</h2>
                        <ol>
                        {(alb.month.all).map((item, i) => {
                            return (
                                <li key={i}>
                                    <Ordinal>{i+1 + '°'}</Ordinal>
                                    <div>
                                        <p>{item.name}</p>
                                        <p>{item.art.name}</p>
                                    </div>
                                </li>
                            )
                        })}
                        </ol>
                        <Link to="/top100/albums">Ver o top 100 albuns</Link>
                    </CardContainer>
                </CardsContainer>
        }
        
        return (
            <MainContainer>
                <Header />
                <main>
                    <h1>
                        Top 100
                        <span>As músicas, álbuns e artistas mais acessados</span>
                    </h1>
                    {container}
                </main>
            </MainContainer>
        )
    }
}

const mapStateToProps = state => ({
    search: state.searchRanking
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(searchActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main);