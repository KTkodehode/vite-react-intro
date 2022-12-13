import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      {/* <Navbar title="Home" />
      <Navbar title="About" />
      <Navbar title="Contact" /> */}

      <MeComp name="Kenneth" text="React"/>
      <Khode name="Kodehode" />
      <MyFilter />
 
      <MyComponentParent>
      <h1>Parent Component</h1>
          <p>Child Component</p>
          <p id ="littleOne">Another Child</p>
          <img
          src="https://images.unsplash.com/photo-1495080600440-47b003ed9521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          alt="" height="700px" width="100%"
        />
      </MyComponentParent>
      {/* <MyComponent name="CompOwnent" />
      <MyComponente name="World" /> */}
    </div>

  )
}

//** Children Proppen **/
function MyComponentParent(props){
  return (
    <div className='papa'> {props.children}</div>
    
  )
}

//** HTML Attr **/
function MyComponent(props) {
  return <h1 className='welcome'> Hello, {props.name}!</h1>;
}

function MeComp(props) {
  return <h1 className='myName'> My name is, {props.name} and I'm learning {props.text}!</h1>;
}
function Khode (props) {
  const { name } = props
  return <h1 className='kodeHode'> @ {name}!</h1>;
}

function MyFilter () {
  return <div className='myFilter'><p>Fancy Hover Colors</p></div>
}
//** Annen måte å skrive det på **//
function MyComponente({ name }) {
  return (
    <div>
      <h1>My other Component</h1>
      <p>Hello, {name}!</p>
    </div>
  );
}




export default App