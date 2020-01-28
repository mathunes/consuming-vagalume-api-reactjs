import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchActions from '../../actions';

class Main extends Component {

    componentDidMount() {
        this.props.searchRanking()
    }

    render() {
        console.log(this.props.search);
        console.log(this.props.search.dataRanking);
        
        return (
            <main>
                <div className="card-music">

                </div>
                <div className="card-artist">

                </div>
                <div className="card-album">

                </div>
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