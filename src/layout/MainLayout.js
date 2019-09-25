import React from 'react';
import { Sidebar, Header, Footer } from './';
import '../resources/MainLayout.css';

export default class MainLayout extends React.Component {
    render() {
        const Component = this.props.component;
        const route = this.props.route;

        return(
            <main>
                <Header></Header>
                <Sidebar></Sidebar>
                <Component route={route}/>
                <Footer></Footer>
            </main>    
        );
    }
}