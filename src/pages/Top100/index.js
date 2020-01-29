import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchActions from '../../actions';

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
                                <li key={i}>
                                    <img src={item.pic_small} alt="Imagem do cantor/banda" />
                                    <p>{item.name}</p>
                                    <p>{item.rank}</p>
                                </li>
                            )
                        })}
                    </ol>

                    break;
                case 'mus':
                    
                    top100 = <ol>
                        {data.mus.month.all.map((item, i) => {
                            return (
                                <li key={i}>
                                    <p>{item.name}</p>
                                    <p>{item.art.name}</p>
                                    <p>{item.rank}</p>
                                </li>
                            )
                        })}
                    </ol>

                    break;
                case 'alb':
                    
                    top100 = <ol>
                        {data.alb.month.all.map((item, i) => {
                            return (
                                <li key={i}>
                                    <img src={item.cover.replace('-W100.jpg', '.webp')} alt="Imagem do álbum" />
                                    <p>{item.name}</p>
                                    <p>{item.art.name}</p>
                                </li>
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
        }

        return (
            <div className="container">
                <h2>Top 100</h2>

                <select onChange={this.handleChangeSelect}>
                    <option id="musics">Músicas</option>
                    <option id="artists">Artistas</option>
                    <option id="albums">Álbuns</option>
                </select>

                {container}
            </div>
            
        )
    }
}

const mapStateToProps = state => ({
    search: state.searchRanking,
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(searchActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Top100);