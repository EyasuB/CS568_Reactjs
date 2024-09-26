import React, { Component } from 'react';

class ChildProp extends Component {
    render() {
        return (
            <p>Hello prof {this.props.professor}, {this.props.children}</p>
        );
    }
}

export default ChildProp;