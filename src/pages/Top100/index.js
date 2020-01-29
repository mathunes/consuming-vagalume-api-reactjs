import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchActions from '../../actions';

class Top100 extends Component {
    state = {
        type: '',
    }

    componentDidMount() {
        this.props.searchRanking(100);

        this.setState({
            type: this.props.match.params.type
        })

    }

    handleChangeSelect(e) {
        this.setState({
            type: e.target.value
        })
    }

    render() {
        let container;

        try {
            document.querySelector(`.${this.props.match.params.type}`).setAttribute('selected', true);    
        } catch (error) {
            
        }
        

        if (this.props.search.searchRanking) {
            container =
            <div className="container">

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