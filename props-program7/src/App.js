import './App.css';
function App() {
  return (
    <div className='App'>
      <GetUser name='Tahreen' uid={101}></GetUser>
      <GetUser name='uzma' uid={102}></GetUser>
      <MyForm />
      <StudentsData />
      <EventDemo />
    </div>
  );
}
function GetUser(props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.uid}</p>
    </div>
  );
}
function MyForm() {
  return (
    <div>
      <form>
        Name:<input type="text" ></input><br></br>
        email:<input type="text"></input><br></br>
        password:<input type="password"></input><br></br>
        <input type="submit"></input><br></br>
        <input type="reset"></input><br></br>
      </form>
    </div>
  );
}
function StudentsData() {
  var list = [
    { id: 1, name: 'Tahreen' },
    { id: 2, name: 'Uzma' },
    { id: 3, name: 'Ayesha' }

  ];
  return (
    <>
      <h2> Students List</h2>
      <ul>
        {
          list.map(row => (
            <li key={row.id}>
              {row.name}
            </li>

          ))
        }
      </ul>
    </>

  );
}
function EventDemo() {
  var display = () => {
    alert('hello');
  }
  return (
    <button onClick={display}>Click Here</button>
  );
}
export default App;