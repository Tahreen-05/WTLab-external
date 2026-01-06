import './App.css';
function App() {
  var header = "MUffakham Jah College of Engineering and Technology";
  var mynav = [
    <a href="">Faculty<br></br></a>,
    <a href="">Student<br></br></a>,
    <a href="">Admin<br></br></a>
  ];
  //javascript object
  var dd = new Date();
  return (

    <div className="App">
      {header}<br></br>
      <h2 style={{ color: "blue" }}>CSE DEPARTMENT</h2><br />
      {mynav}<br></br>
      {dd.toDateString()}
      <h3>MISSION</h3>
      <p>To impart quality education and training in Computer Science and Engineering to produce competent professionals with strong ethical values, capable of catering to the needs of the industry and society.</p>
    </div>)


}
export default App;