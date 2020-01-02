//   https://www.youtube.com/watch?v=v5pancyOwj4&list=PLevjgbzdU8UxfbRrLb_ILGXRAHbeJT7w2&index=2

// 1)  Властивості(свойства) не можна змінити в середині компоненту.
// 2) Батьківський елемент завжди передає свої властивості дочірним елементам. Тобто компонет HelloWorld передає свої властивості дочірньому елементу h1

// create variable 
var h1 = React.createElement("h1", null, "Hello world!");

// create a component
class HelloWorld extends React.Component{
   render(){
      // відображення перемінної h1
      // return React.createElement("div", null, h1)
      // ========================= OR ===================================

      //  виводимо один з атребутів  елементу ||  props містить всі атребути і властивості даного елементу this :^) 
      // return React.createElement("h3", null, "Hello " + this.props.petName )
      // ========================= OR ===================================
      
      // виводимо один з атребутів і html тегу h3 передаємо всі атребути даного елементу 
      return React.createElement("h3", this.props, "Hello " + this.props.petName )


    }
}

ReactDOM.render(
  // React.createElement(HelloWorld, null), document.getElementById("content"),

  // щоб відобразити декілька елементів нам потрібно обернути їх в якийсь батьківський елемент типу div 
  React.createElement(
        "div", 
        null,
        // створюємо декілька елементів які  будуть обернуті в елемент div
        React.createElement(HelloWorld, null),
        // добавляємо атребути до елементу
        React.createElement(HelloWorld, {
            id:"dog",
            petName: "Helga",
            title: "Taksa"
          }
        ),
        React.createElement(HelloWorld, {
          id:"cat",
          petName: "Harold",
          title: "Simaskiy"
        }),
        React.createElement(HelloWorld, null) 
  ), 
  document.getElementById("content")
)