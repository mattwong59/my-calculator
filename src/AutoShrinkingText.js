import React, { Component } from 'react';
import './App.css';

class AutoShrinkingText extends Component {
    state = {
        scale: 1
    }

    componentDidUpdate() {
        const node = this.node
        const {offsetWidth} = node
        const parentWidth = node.offsetParent.offsetWidth
        const scale = offsetWidth / parentWidth

        if(scale > 1) {
            
        } else if {
            this.setState({
                scale: 1 / scale
            })
        }
    }
    render(){
        const { scale } = this.state
        return (
            <div {...this.props} 
                style={{transform: `scale($scale),${scale})` }}
                ref={node => this.node = node}/>
        )      
    }
}

export default AutoShrinkingText