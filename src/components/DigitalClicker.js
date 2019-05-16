import React from 'react'
 

class DigitalClicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = { timesClicked: 0 }
    }

    increaseCount = () => {
        this.setState((state) => {
            return {timesClicked: state.timesClicked + 1}
        })
    }

    render() { 
        return ( 
            <button onClick={this.increaseCount}>{this.state.timesClicked}</button>
         );
    }
}
 
export default DigitalClicker;