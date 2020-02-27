import React from 'react';

class Rewards extends React.Component{

    UNSAFE_componentWillMount(){
        console.log('Rewards mount');
    }

    render(){
        return(
            <header>Ini adalah Rewards page</header>
        )
    }
}

export default Rewards;