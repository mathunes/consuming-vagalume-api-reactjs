import React, { Component } from 'react';
import { connect } from 'react-redux';

class Top100 extends Component {
    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <p>Teste</p>
        )
    }
}

const mapStateToProps = state => ({
    search: state.searchRanking,
})

export default connect(mapStateToProps)(Top100);