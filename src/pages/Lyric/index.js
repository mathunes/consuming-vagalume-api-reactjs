import React, { Component } from 'react';
import Header from '../../components/Header';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actionSearchLyric from '../../actions';
import { connect } from 'react-redux';

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
        console.log(data)
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
                                <div key>
                                    <h2>{item.name}</h2>
                                    <h3>{data.dataLyric.art.name}</h3>
                                    <p>{item.text}</p>
                                    {(item.translate !== undefined) ?
                                        item.translate.map((item, i) => {
                                            return (
                                                <p key={i}>{item.text}</p>
                                            )
                                        }) : ''
                                    }
                                    
                                </div>
                            )
                }) : '' }
                </div>
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
    search: state.searchLyric
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(actionSearchLyric, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Lyric);