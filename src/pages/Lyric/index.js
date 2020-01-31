import React, { Component } from 'react';
import Header from '../../components/Header';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actionSearchLyric from '../../actions';
import { connect } from 'react-redux';
import { ContainerLyric, ErrorMessage, Lyrics, OriginalLyric, TranslateLyric, ContainerLyrics, Container } from './styles.js';

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
                container = <h2>Carregamento</h2>
            } else {
                container = 
                <div>
                    {(data.dataLyric.mus !== undefined) ? 
                        data.dataLyric.mus.map((item, i) => {
                            return (
                                <Lyrics key>
                                    <h2>{item.name}</h2>
                                    <h3>{data.dataLyric.art.name}</h3>
                                    <ContainerLyrics>
                                        <OriginalLyric>
                                            <h4>
                                                {item.name}
                                                <br></br>
                                                <br></br>
                                            </h4>
                                            {item.text.split(/\n/g).map((verse, i) => {
                                                return (
                                                    <div key={i}>
                                                        {verse}
                                                        <br></br>
                                                    </div>
                                                    
                                                )
                                            })}
                                        </OriginalLyric>
                                        
                                        {(item.translate !== undefined) ?
                                            item.translate.map((item, i) => {
                                                return (
                                                    <TranslateLyric key={i}>
                                                        {item.text.split(/\n/g).map((verse, i) => {
                                                            return (                                                            
                                                                <div key={i}>
                                                                    {(i === 0) ? 
                                                                        <div>
                                                                            <h4>{verse.replace('[', '').replace(']', '')}</h4>
                                                                        </div> : 
                                                                        <div>
                                                                            {verse}
                                                                            <br></br>
                                                                        </div>}
                                                                </div>
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