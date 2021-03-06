import React, { Component } from 'react';
import './Dialog.css';
import { CloseButton , Button } from '@chakra-ui/react'
import { ThemeProvider } from '@emotion/react';
export default class Dialog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            diffX: 0,
            diffY: 0,
            dragging: false,

            styles: {}
        }

        this._dragStart = this._dragStart.bind(this);
        this._dragging = this._dragging.bind(this);
        this._dragEnd = this._dragEnd.bind(this);
    }

    _dragStart(e) {
        this.setState({
            diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
            diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
            dragging: true
        });
    }

    _dragging(e) {

        if(this.state.dragging) {
            var left = e.screenX - this.state.diffX;
            var top = e.screenY - this.state.diffY;
    
            this.setState({
                styles: {
                    left: left,
                    top: top
                }
            });
        }
    }    

    _dragEnd() {
        this.setState({
            dragging: false
        });
    }
  
    render() {
        var classes;
        

        if (this.props.show){classes='Dialog'}
    else{classes='Dialog hidden'}
    if (this.props.quieto && this.props.show){classes='noMove'}

        // var classes = this.props.show ? 'Dialog' : 'Dialog hidden';
        console.log(classes)

        return (
            <>
           
            <div className={classes} style={this.state.styles} onMouseDown={this._dragStart} onMouseMove={this._dragging} onMouseUp={this._dragEnd}>
                <div className='Contents'>
                    <img src={this.props.imagen} style={{ width: '500px' }}></img>
                    <CloseButton size='md'onClick={this.props.onClose} />
                    
                </div>
                
               
            </div>
            </>
        );
    }
}