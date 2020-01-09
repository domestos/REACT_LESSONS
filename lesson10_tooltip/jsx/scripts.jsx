class MyTooltip extends React.Component{
   constructor(props){
        super(props)
        this.toggle = this.toggle.bind(this)
        this.state = {opacity:false}
    }
   
    toggle(){
        // змінна яка містить даний елемент 
        const tooltipNode = ReactDOM.findDOMNode(this)
        this.setState({
            // !- змінює значення на протележне
            opacity: !this.state.opacity,
            // offsetTop - метод, що повертає відстань від верхнього краю батьківського елементу до даного елементу
            top: tooltipNode.offsetTop,
            left: tooltipNode.offsetLeft
        })
    }

    render(){
        const style = {
            // if ( this.state.opacity === true ){zIndex =10000}else{ zIndex = -1000}
            zIndex: (this.state.opacity) ? 1000 : -1000 ,
            //change boolion value
            opacity: +this.state.opacity,
            top: (this.state.top || 0)+20,
            left:(this.state.left || 0)+30
        }
        return (
            <div style={{display:'inline'}}>
                <span style={{color: 'blue'}}
                    onMouseEnter={this.toggle}
                    onMouseOut={this.toggle}
                >
                    {this.props.children}
                </span>
                <div className="tooltip bottom" style={style}>
                    <div className="tooltip-arrow"></div>
                    <div className="tooltip-inner">
                        {this.props.text}
                    </div>

                </div>
            </div>
        )
    }
}



ReactDOM.render(<div>
        My super larg <MyTooltip text="it is a Text"> text. </MyTooltip>
    </div>,
    
    document.getElementById('content')
)