import React, { Component } from 'react';
import './Board.css';
import Dialog from '../Components/Dialog';
import sinapsis from '../images/sinapsis.png';
import membrana from '../images/membrana.png';
import { Image,Container,Box,Button  } from '@chakra-ui/react';
import Kontainer2 from '../Components/kontainer/Kontainer2.js';

export default class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showDialog: false,
showQuieto: false
        }
    }

    _showDialog() {
        this.setState({showDialog: !this.state.showDialog});
    }
    
    handleSubmitClicked() {
        this.setState({
          showQuieto: true
        });
      
      setTimeout(
        function() {
          this.enableComponents()
        }.bind(this),
        6000
      );
    }
  
    enableComponents() {
      this.setState({
    showQuieto: false
      });
    }

	render() {
        
		return (
            <>
            
        
               
                <div className='Title'>Comunicación Celular</div>
                <Image  ml={20}
                boxSize='100px'
    objectFit='true'
    alt='sinapsis'src={sinapsis} onClick={this._showDialog.bind(this)}></Image>
                <Dialog onClose={this._showDialog.bind(this)} imagen= {sinapsis}  show={this.state.showDialog} quieto={this.state.showQuieto}/>
                    {/* <div>  <Image  ml={20}
                    boxSize='100px'
        objectFit='true'
        alt='membrana'src={membrana} onClick={this._showDialog.bind(this)}></Image>
                    <Dialog onClose={this._showDialog.bind(this)} imagen= {membrana}  show={this.state.showDialog}/></div>
                 */}
                 <Button   onClick={this.handleSubmitClicked.bind(this)}> quieto</Button>

</>
		);
	}
} 

