/**
 * Created by IncWolf on 17.09.2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';

export default class First extends React.Component {
    render() {
        return (<div style={{width: '100px', height: '100px', backgroundColor: 'red'}}>{this.props.children}</div>)
    }
}
