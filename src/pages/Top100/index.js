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

        let classOption = document.querySelector('select').querySelector('option:checked').getAttribute('class');
        
        this.setState({
            type: classOption.substring(0, 3)
        })
    }

    render() {
        let container;

        try {
            document.querySelector(`.${this.props.match.params.type}`).setAttribute('selected', true);    
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
                                    {console.log(item)}
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
                    <option className="musics">Músicas</option>
                    <option className="artists">Artistas</option>
                    <option className="albums">Álbuns</option>
                </select>

                {container  }
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