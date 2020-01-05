//Stateless
const DigitalClock = function(props){
    return <div>{props.time}</div>
}

// State
class Clock extends React.Component{
    //рекомендується завжди передавати перемінну props
    constructor(props){
        super(props);
        // задаємо початкові параметри стану.
        this.state={
            currentTime:(new Date()).toLocaleString()
        }
        this.clockLauncher()
    }

    clockLauncher(){
        //анонімна функція ()=>{} без параметрів. val=>{} передається параметр в функцію
        setInterval(()=>{
            console.log('time changing');
            /* this.setState()- Функція приймає два параметра: 
                -параметри які треба змінити; 
                -функція callBack (другий параметр не обов"язковий) */
            this.setState({currentTime:(new Date()).toLocaleString()})
        }, 1000)
    }

    render(){
        return (<div>
            {/* state method */}
            {this.state.currentTime}
            {/* stateless method is recomandated for use */}
            <DigitalClock time={this.state.currentTime} />
            </div>)
    } 
}

ReactDOM.render(<Clock/>,
    document.getElementById("content")
);