import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchActions from '../../actions';
import Header from '../../components/Header';
import loadingGif from '../../assets/images/loading.gif';
import {LoadingImage, RankingContainer, CardContainer, Ordinal, PictureArt, PictureAlb, Score } from './styles.js';
import { Link } from 'react-router-dom';

class Top100 extends Component {
    constructor() {
        super();
        this.handleChangeSelect = this.handleChangeSelect.bind(this)
    }

    state = {
        type: '',
    }

    componentDidMount() {
        this.props.searchRanking(100);

        this.setState({
            type: this.props.match.params.type.substring(0, 3)
        })

    }

    handleChangeSelect() {

        let idOption = document.querySelector('select').querySelector('option:checked').getAttribute('id');
        
        this.setState({
            type: idOption.substring(0, 3)
        })

        this.props.history.push(`/top100/${idOption}`);
    }

    render() {
        let container;

        try {
            document.querySelector('#musics').removeAttribute('selected');
            document.querySelector('#artists').removeAttribute('selected');
            document.querySelector('#albums').removeAttribute('selected');
            document.querySelector(`#${this.props.match.params.type}`).setAttribute('selected', true);    
        } catch (error) {
           
        }

        if (this.props.search.searchRanking) {

            let top100;
            let data = this.props.search.dataRanking;

            switch (this.state.type) {
                case 'art':
                    
                    top100 = <ol>
                        {data.art.month.all.map((item, i) => {
                            return (
                                <CardContainer key={i}>
                                    <Ordinal>
                                        {i+1 + '°'}
                                    </Ordinal>
                                    <PictureArt>
                                        <img src={item.pic_small} alt="Imagem do cantor/banda" />
                                    </PictureArt>
                                    <div>
                                        <p>{item.name}</p>
                                        <Score>{item.rank + ' Pontos'}</Score>
                                    </div>
                                </CardContainer>
                            )
                        })}
                    </ol>

                    break;
                case 'mus':
                    
                    top100 = <ol>
                        {data.mus.month.all.map((item, i) => {
                            return (
                                <CardContainer key={i}>
                                    <Ordinal>
                                        {i+1 + '°'}
                                    </Ordinal>
                                    <div>
                                        <p>
                                            <Link to={'/lyric/id=' + item.id}>
                                                {item.name}
                                            </Link>
                                        </p>
                                        <p>{item.art.name}</p>
                                        <Score>{item.rank + ' Pontos'}</Score>
                                    </div>
                                </CardContainer>
                            )
                        })}
                    </ol>

                    break;
                case 'alb':
                    top100 = <ol>
                        {data.alb.month.all.map((item, i) => {
                            return (
                                <CardContainer key={i}>
                                    <Ordinal>
                                        {i+1 + '°'}
                                    </Ordinal>
                                    <PictureAlb>
                                        <img src={item.cover.replace('-W100.jpg', '.webp')} alt="Imagem do álbum" />
                                    </PictureAlb>
                                    <div>
                                        <p>{item.name}</p>
                                        <p>{item.art.name}</p>
                                    </div>
                                </CardContainer>
                            )
                        })}
                    </ol>

                    break;
                default:
                    break;
            }

            container =
            <div className="container">
                {top100}
            </div>
        } else {
            container =
            <LoadingImage>
                <img src={loadingGif} alt="Carregando"></img>
            </LoadingImage>
        }

        return (
            <RankingContainer>
                <Header />
                <h1>Top 100</h1>

                <select onChange={this.handleChangeSelect}>
                    <option id="musics">Músicas</option>
                    <option id="artists">Artistas</option>
                    <option id="albums">Álbuns</option>
                </select>

                {container}
            </RankingContainer>
            
        )
    }
}

const mapStateToProps = state => ({
    search: state.searchRanking,
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(searchActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Top100);