import React, { Component } from 'react';
import Header from '../../components/Header';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actionSearchLyric from '../../actions';
import { connect } from 'react-redux';
import { ContainerLyric, ErrorMessage, Lyrics, OriginalLyric, TranslateLyric, ContainerLyrics, Container, LoadingImage } from './styles';
import loadingGif from '../../assets/images/loading.gif';

class Lyric extends Component {

    state = {
        noId: false,
        id: ''
    }

    validateURL() {
        if (this.props.match.params.id === undefined) {
            this.setState({
                noId: true
            })
        }
    }

    search(id) {
        this.props.searchLyric(id);
    }

    componentDidMount() {
        this.validateURL();

        let id = this.props.match.params.id;
        
        this.setState({
            id
        })

        this.search(id);
        
    }

    render() {

        let data = this.props.search;
        
        let container;

        if (this.state.noId) {
            container = <Redirect to="/" />
        } else {
            if (data.loading) {
                container =
                    <LoadingImage>
                        <img src={loadingGif} alt="Carregando"></img>
                    </LoadingImage>
            } else {
                container = 
                <div>
                    {(data.dataLyric.mus !== undefined) ? 

                        data.dataLyric.mus.map((item, i) => {
                            let alignLyric;
                            (item.translate === undefined) ? alignLyric = 'left' : alignLyric = 'right';
                            return (
                                <Lyrics key>
                                    <h2>{item.name}</h2>
                                    <h3>{data.dataLyric.art.name}</h3>
                                    <ContainerLyrics>
                                        <OriginalLyric alignLyric={alignLyric}>
                                            <h4>
                                                {item.name}
                                                <br></br>
                                                <br></br>
                                            </h4>
                                            {item.text.split(/\n/g).map((verse, i) => {
                                                return (
                                                    <span key={i}>
                                                        <p>
                                                            {verse}
                                                            <br></br>
                                                        </p>
                                                    </span>
                                                    
                                                )
                                            })}
                                        </OriginalLyric>
                                        
                                        {(item.translate !== undefined) ?
                                            item.translate.map((item, i) => {
                                                return (
                                                    <TranslateLyric key={i}>
                                                        {item.text.split(/\n/g).map((verse, i) => {
                                                            return (                                                            
                                                                <span key={i}>
                                                                    {(i === 0) ? 
                                                                        
                                                                            <h4>{verse.replace('[', '').replace(']', '')}</h4>
                                                                        :
                                                                        <p>
                                                                            {verse}
                                                                            <br></br>
                                                                        </p>}
                                                                </span>
                                                            )
                                                        })}
                                                    </TranslateLyric>
                                                )
                                            }) : ''
                                        }
                                    </ContainerLyrics>
                                </Lyrics>
                            )
                }) : 
                    <ErrorMessage>
                        <span>Não encontrado</span>
                    </ErrorMessage> }
                
                </div>
            }
        }

        return (
            <Container>
                <Header />
                <ContainerLyric>
                    {container}
                </ContainerLyric>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    search: state.searchLyric
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(actionSearchLyric, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Lyric);