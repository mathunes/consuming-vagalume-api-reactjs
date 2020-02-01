import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchActions from '../../actions';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { MainContainer, CardsContainer, CardContainer, Ordinal, ButtonTop, PictureArt, LoadingImage } from './styles';
import loadingGif from '../../assets/images/loading.gif';

class Main extends Component {

    componentDidMount() {
        this.props.searchRanking()
    }

    render() {

        let container;

        if (this.props.search.searchRanking) {
            //Verificar se houve error ---------------------------------------------------------------------------------------------------
            let {mus, art, alb} = this.props.search.dataRanking;
            {console.log(this.props)}
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
                                        <p>
                                            <Link to={'/lyric/id=' + item.id}>
                                                {item.name}
                                            </Link>
                                        </p>
                                        <p>{item.art.name}</p>
                                    </div>
                                </li>
                            )
                        })}
                        </ol>
                        <Link to="/top100/musics">
                            <ButtonTop>
                            Ver o top 100 músicas
                            </ButtonTop>
                        </Link>
                    </CardContainer>

                    <CardContainer>
                        <h2>Artistas</h2>
                        <ol>
                        {(art.month.all).map((item, i) => {
                            return (
                                <li key={i}>
                                    <Ordinal>{i+1 + '°'}</Ordinal>
                                    <PictureArt>
                                        <img src={item.pic_small} alt="Foto do artista" />
                                    </PictureArt>

                                    <div>
                                        <p>{item.name}</p>
                                    </div>
                                </li>
                            )
                        })}
                        </ol>
                        <Link to="/top100/artists">
                            <ButtonTop>
                                Ver o top 100 artistas
                            </ButtonTop>
                        </Link>
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
                        <Link to="/top100/albums">
                            <ButtonTop>
                            Ver o top 100 albuns
                            </ButtonTop>
                        </Link>
                    </CardContainer>
                </CardsContainer>
        } else {
            container = 
                <LoadingImage>
                    <img src={loadingGif} alt="Carregando"></img>
                </LoadingImage>
            
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