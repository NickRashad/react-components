// TODO
// var App = () => (
//   <div>
//     <h1>Some cliche salutation</h1>
//   </div>

// );

// ReactDOM.render(<App />, document.getElementById("app"));

const GroceryListItem = (props) => (
  <ul>
    <li>{props.items[0]}</li>
    <li>{props.items[1]}</li>
    <li>{props.items[2]}</li>
  </ul>
);

var GroceryList = (props) => (
  <GroceryListItem items={['apples', 'bananas', 'oranges']}/>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));

