import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchActions from '../../actions';

class Main extends Component {

    componentDidMount() {
        this.props.searchRanking()
    }

    render() {

        let container;

        if (this.props.search.searchRanking) {
            let {mus, art, alb} = this.props.search.dataRanking;

            container = 
                <div className="container">
                    <div className="card-music">
                        <h3>Músicas</h3>
                        <ol>
                        {(mus.month.all).map((item, i) => {
                            return (
                                <li key={i}>
                                    <p>{item.name}</p>
                                    <p>{item.art.name}</p>
                                </li>
                            )
                        })}
                        </ol>
                    </div>
                    <div className="card-artist">
                        <h3>Artistas</h3>
                        <ol>
                        {(art.month.all).map((item, i) => {
                            return (
                                <li key={i}>
                                    <p>{item.name}</p>
                                </li>
                            )
                        })}
                        </ol>
                    </div>
                    <div className="card-album">
                        <h3>Álbum</h3>
                        <ol>
                        {(alb.month.all).map((item, i) => {
                            console.log(item)
                            return (
                                <li key={i}>
                                    <p>{item.name}</p>
                                    <p>{item.art.name}</p>
                                </li>
                            )
                        })}
                        </ol>
                    </div>
                </div>
        }
        
        return (
            <main>
                {container}
            </main>
        )
    }
}

const mapStateToProps = state => ({
    search: state.searchRanking
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(searchActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main);