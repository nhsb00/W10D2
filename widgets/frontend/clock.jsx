import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {time:new Date()};
        this.tick = this.tick.bind(this);
        
    }

    componentDidMount(){
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    tick(){
        this.setState({ time: new Date() })
    }

    render () {
        let hours = this.state.time.getHours()
        let minutes = this.state.time.getMinutes()
        let seconds = this.state.time.getSeconds()
        return (
            <div> 
                <h1>Clock</h1>
                
                <div className='clock'>
                <h1>Time:</h1> 
                <p> 
                {hours}:{minutes}:{seconds} 
                </p>

                <h1>Date:</h1>
                <p>
                {this.state.time.getFullYear()}:{this.state.time.getMonth() + 1}:{this.state.time.getDate()}
                </p>
                </div>
            </div>
        )
    }
}

export default Clock;