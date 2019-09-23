import React from 'react';

export default class BlankLayout extends React.Component {
    render() {
        const Component = this.props.component;
        const route = this.props.route;

        return(
            <Component route={route}/>
        );
    }
}