// TODO
// var App = () => (
//   <div>
//     <h1>Some cliche salutation</h1>
//   </div>

// );

// ReactDOM.render(<App />, document.getElementById("app"));

var GroceryList = (props) => (
  <ul>
    <li>{props.item1}</li>
    <li>{props.item2}</li>
  </ul>
);

ReactDOM.render(<GroceryList item1 = 'apples' item2 = 'berries' />, document.getElementById("app"));