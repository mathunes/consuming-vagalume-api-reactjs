import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchActions from '../../actions';

class Main extends Component {
    render() {

        console.log(this.props);

        return (
            <main>
                MAAAIN
            </main>
        )
    }
}

const mapStateToProps = state => ({
    search: state.search
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(searchActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main);