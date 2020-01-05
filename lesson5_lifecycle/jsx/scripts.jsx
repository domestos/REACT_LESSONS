//Stateless
const DigitalClock = function(props){
    return (<div>{props.time}
    
    </div>)
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
        
    }

    // Mount Events
    //runs before rendering the component
    componentWillMount(){
        console.log("component will be mount")
    }
    //runs after rendering the component
    componentDidMount(){
        console.log("component was mounted");
        this.clockLauncher();
    }

    // Update Events
    // componentWillReceiveProps(){}
    //show or not updated view. return default - true
    // shouldComponentUpdate(){ }
     componentWillUpdate(){ console.log("component was updated")}
    // componentDidUpdate(){}

    // Delete/UnMount Event
    componentWillUnmount(){
        clearInterval(this.state.diapazon)
    } 

    clockLauncher(){
        //анонімна функція ()=>{} без параметрів. val=>{} передається параметр в функцію
       let diapazon =  setInterval(()=>{
            console.log('time changing');
            /* this.setState()- Функція приймає два параметра: 
                -параметри які треба змінити; 
                -функція callBack (другий параметр не обов"язковий) */
            this.setState({currentTime:(new Date()).toLocaleString()})
        }, 1000)
        this.setState({diapazon:diapazon})
    }

    render(){
        return (<div>
            {/* state method */}
            {this.state.currentTime}
            {/* stateless method is recomandated for use */}
            <DigitalClock time={this.state.currentTime} />
            <p>Clock will be removed in {this.props.seconds}</p>
            </div>)
    } 
}

let seconds= 5;
let interval = setInterval(()=>{
    if (seconds === 0){
        ReactDOM.render(<div>Clock has been removed.</div>,document.getElementById("content"));
        clearInterval(interval)
    }else{
        ReactDOM.render(<Clock/>,document.getElementById("content"));
        seconds --
    }
},1000);