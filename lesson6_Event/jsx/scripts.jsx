// class Button extends React.Component{
//     myClick(){
//         console.log("I Clicked....")
//     }

//     render(){
//         // .bind(this) - вказує на те, що подія клік прикріплена до даного класу (Button)
//         return( <button onClick={this.myClick.bind(this)} type="button" className="btn btn-primary">Cleck me!</button>)
//     }
// }

// ReactDOM.render(
//     <Button/>,
//     document.getElementById("content")
// )
/**
 * ===================================================================================
 привязувязку функції до компоненту рекомендується робити в середині конструктора
 =====================================================================================
*/

// class Button extends React.Component{

//     constructor(props){
//         super(props);
//         this.myClick = this.myClick.bind(this);
//         this.state = {counter:0}
//     }

//     //Event functions
//     myClick(){
//         console.log("I Clicked....");
//         this.setState({counter: ++this.state.counter})
//     }

//     render(){
//         return( <button onClick={this.myClick} type="button" className="btn btn-primary">Cleck me! {this.state.counter}</button>)
//     }
// }

// ReactDOM.render(
//     <Button/>,
//     document.getElementById("content")
// )

/**
 * ===================================================================================
 * Щоб можна було використати кнопу в інших компонентах її слід винести з логіки (зробити її StateLess).
 * Розділити логіку і кнопку.
 =====================================================================================
*/
class Content extends React.Component{

    constructor(props){
        super(props);
        this.myClick = this.myClick.bind(this);
        this.heandlerClickHide = this.heandlerClickHide.bind(this);
        // this.heandlerClickShow = this.heandlerClickShow.bind(this);
        this.state = {counter:0}
    }

    //Event functions   
    myClick(){
        console.log("I Clicked....");
        this.setState({counter: ++this.state.counter})
    }
    // Event functions with jQuery
    heandlerClickHide(){
        console.log("heandlerClickHide");
        $("#text").fadeOut("slow");
    }
    // Event functions with jQuery
    heandlerClickShow(){
        console.log("heandlerClickShow");
        $("#text").fadeIn("slow");
    }

    render(){
        // For Single Stateless
        // return <div> <Button 
        //                     counter={this.state.counter}
        //                     heandler={this.myClick} /></div>

        return <div> 
            <Button  heandler={this.myClick} 
                        heandlerClickHide = {this.heandlerClickHide}
                        heandlerClickShow = {this.heandlerClickShow}/>          
            <Text counter={this.state.counter} />
        </div>
    }
    
    


}

// StateLess який приймає функцію і текст
// class Button extends React.Component{
//     render(){
//         return( <button onClick={this.props.heandler} type="button" className="btn btn-primary">Cleck me! {this.props.counter}</button>)
//     }
// }

// Вище закоментований StateLess запишемо за допомогою двох StateLess елементів
// First StateLess 
class Button extends React.Component{
    render(){
        return(
            <div>
            <button onClick={this.props.heandler}>Cleck me!</button>
            <button onClick={this.props.heandlerClickHide}>jQuery Hide</button>
            <button onClick={this.props.heandlerClickShow}>jQuery Show</button>
        </div>
        )
    }
}


class Text extends React.Component{
    render(){
        return <div id="text"> Button was Clicked {this.props.counter} times !</div>
    }
}

ReactDOM.render(
    <Content/>,
    document.getElementById("content")
)