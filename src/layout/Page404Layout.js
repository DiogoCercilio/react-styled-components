import React from 'react';

class Page404Layout extends React.Component {
    render() {
        const Component = this.props.component;
        const route = this.props.route;

        return (
            <Component route={route}/>
        )
    }
}
export default Page404Layout