class TimerWrapper extends React.Component{
    constructor(props){
        super(props)
        this.startTimer = this.startTimer.bind(this)
        this.state={
            timeLeft:null,
            tomer:null
        }
    }

    startTimer(timeLeft){
        clearInterval(this.state.timer)
        let timer=setInterval(() => {
            var timeLeft = this.state.timeLeft - 1
            if (timeLeft ===0) {
                clearInterval(timer)
            }
            this.setState({
                timeLeft: timeLeft,
               
            })
        }, 1000);
        return this.setState({
            timeLeft: timeLeft,
            timer: timer
        })
    }
    render(){
        return(
            <div> 
                <h2>Timer</h2>
                <div>
                    <Button time="5" startTimer={this.startTimer}/>
                    <Button time="15" startTimer={this.startTimer}/>
                    <Button time="25" startTimer={this.startTimer}/>
                </div>
                <TimerDisplay timeLeft={this.state.timeLeft}/>
                <audio id ="end" preload="auto" src="media/mp3.mp3"></audio>
            </div>
        )
    }
}

class Button extends React.Component {
    heandlerStartTime(){
        return this.props.startTimer(this.props.time)
    }

    render(){
        return( 
            <button onClick={this.heandlerStartTime.bind(this)}>{this.props.time} sec.</button>
         )
    }
}

class TimerDisplay extends React.Component {
    render(){
        if(this.props.timeLeft ===0 ){
            document.getElementById("end").play()
        }
        
        if (this.props.timeLeft === 0 || this.props.timeLeft === null){
            return <div></div>
        }
       return <h1>Time left: {this.props.timeLeft}</h1>

        
    }
}

ReactDOM.render(
    <div>   
        <TimerWrapper/>
    </div>,
    
    document.getElementById('content')
)