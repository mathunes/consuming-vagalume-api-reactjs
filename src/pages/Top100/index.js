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

        console.log(this.state.type)

        try {
            document.querySelector(`.${this.props.match.params.type}`).setAttribute('selected', true);    
        } catch (error) {
           
        }

        // if (this.props.search.searchRanking) {
        //     let { art, mus, alb } = this.props.search.dataRanking;

        //     let chosenType;

        //     switch (this.state.type) {
        //         case 'musics':
        //             chosenType = mus;
        //             break;
        //         case 'artists':
        //             chosenType = art;
        //             break;
        //         case 'albums':
        //             chosenType = alb;
        //             break;
        //         default:
        //             chosenType = mus;
        //             break;
        //     }

        //     console.log(chosenType);

        //     container =
        //     <div className="container">
        //         {/* {console.log(art, mus, alb)} */}
        //     </div>
        // }

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