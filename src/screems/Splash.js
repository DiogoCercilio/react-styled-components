import React from 'react';
import styled from 'styled-components'

export const View = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #eee;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.div`
    color: #333;
    font-weight: 900;
    font-size: 50px;
`;

export const Img = styled.img`
    width: 120px;
`;

class Splash extends React.Component {
        
    componentDidMount() {
        setTimeout(()=> {
            this.props.route.history.push('/login');
        }, 2000);
    }

    render() {
        return (
            <View>
                <Img className='revealing' src="http://pngimg.com/uploads/github/github_PNG40.png"/>
            </View>            
        )
    }
}
export default Splash