import React, { Component } from 'react';
import { connect } from 'react-redux';

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

export default connect(mapStateToProps)(Main);