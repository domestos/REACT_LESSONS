// https://www.youtube.com/watch?v=M3RrEYcsogg&list=PLevjgbzdU8UxfbRrLb_ILGXRAHbeJT7w2&index=7
class Content extends React.Component{

    heandlerSubmite(){
        alert("Form submit")
    }
    render(){
        // form має декілька станів: onChange; onInput; onSubmit;    onInput-  не рекомендується використовувати в React
        return(
        <form onSubmit={this.heandlerSubmite.bind(this)} action="">
            <input type="submit" value="Submit"/>
        </form>
        )
    }
}

class InputTypeText extends React.Component{
    heandlerChange(event){
        console.log(event.target.value)
    }
    render(){
        return(
            <input type="text" onChange={this.heandlerChange.bind(this)} />
        )
    }
}

class InputRadioBox extends React.Component{
    constructor(props){
        super(props);
        this.heandlerRadio = this.heandlerRadio.bind(this)
        this.state={
            radioGroup:{
                angular:false,
                react: true,
                ember: false
            }
        }
        this.helperLog()
    }
    heandlerRadio(event){
      let object = {};
      object[event.target.value] = event.target.checked
      this.setState({radioGroup:object})
    }
    helperLog(){
        setInterval(()=>{
            console.log(this.state.radioGroup)
        }), 9000000
    }
    render(){
        return(
            <form >
                <input type="radio" value="angular" checked={this.state.radioGroup.angular} onChange={this.heandlerRadio} name="group1"/>
                <input type="radio" value="react" checked={this.state.radioGroup.react} onChange={this.heandlerRadio} name="group1"/>
                <input type="radio" value="ember" checked={this.state.radioGroup.ember} onChange={this.heandlerRadio} name="group1"/>
            </form>
        )
    }
}

class InputCheckeBox extends React.Component{
    constructor(props){
        super(props);
        this.heandlerCheckeBox = this.heandlerCheckeBox.bind(this)
        this.state={
            checkBoxGroup:{
                angular:false,
                react: true,
                ember: false
            }
        }
        this.helperLog()
    }
    heandlerCheckeBox(event){
        let object = Object.assign(this.state.checkBoxGroup);
        object[event.target.value] = event.target.checked
        this.setState({checkBoxGroup:object})
    }
    helperLog(){
        setInterval(()=>{
            console.log(this.state.checkBoxGroup)
        }, 3000)
    }
    render(){
        return(
            <form >
                <input type="checkbox" value="angular" checked={this.state.checkBoxGroup.angular} onChange={this.heandlerCheckeBox} name="group1"/>
                <input type="checkbox" value="react" checked={this.state.checkBoxGroup.react} onChange={this.heandlerCheckeBox} name="group1"/>
                <input type="checkbox" value="ember" checked={this.state.checkBoxGroup.ember} onChange={this.heandlerCheckeBox} name="group1"/>
            </form>
        )
    }
}

class InputTextArea extends React.Component{
    constructor(props){
        super(props);
        this.heandlerTextArea = this.heandlerTextArea.bind(this)
        this.state={
            text:"text here"
        }
        this.helperlog()
    }
    helperlog(){
        setInterval(()=>{
            console.log(this.state.text)
        }, 1000)
        
    }
    heandlerTextArea(event){
        this.setState({text:event.target.value})
    }
    render(){
        return( <form>
                    <textarea value={this.state.text} onChange={this.heandlerTextArea}></textarea>
                </form>
         )
    }
}


class InputSelect extends React.Component{
    constructor(props){
        super(props);
        this.heandlerSelect = this.heandlerSelect.bind(this)
        this.heandlerButton = this.heandlerButton.bind(this)
        this.state={
            selectedValue:"angular"
        }
        this.helperlog()
    }
    helperlog(){
        setInterval(()=>{
            console.log(this.state.selectedValue)
        }, 1000)
        
    }
    heandlerSelect(event){
        this.setState({selectedValue:event.target.value})
    }
    heandlerButton(){
        alert("Current data is submitted "+ this.state.selectedValue)
    }
    render(){
        return( <form>
                <select 
                    value={this.state.selectedValue}
                    onChange={this.heandlerSelect}
                >
                    <option value="angular">Angular</option>
                    <option value="react">React</option>
                    <option value="ember">Ember</option>
                </select>
                <input type="button" value="submit" onClick={this.heandlerButton}/>
                </form>
         )
    }
}

ReactDOM.render(
    // <InputTypeText />,
    // <InputRadioBox />,
    // <InputCheckeBox />,
    // <InputTextArea />,
    <InputSelect />,
    
    document.getElementById('content')
)