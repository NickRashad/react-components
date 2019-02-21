// TODO
// var App = () => (
//   <div>
//     <h1>Some cliche salutation</h1>
//   </div>

// );

// ReactDOM.render(<App />, document.getElementById("app"));

var GroceryList = (props) => (
  <ul>
    <Apples />
    <Berries />
  </ul>
);

var Apples = (props) => (
  <li>apples</li>
)

var Berries = (props) => (
  <li>berries</li>
)

ReactDOM.render(<GroceryList />, document.getElementById("app"));