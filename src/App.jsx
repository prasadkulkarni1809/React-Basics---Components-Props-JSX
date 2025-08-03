import UserCard from "./component/UserCard"
import './App.css';
import achiver from "./assets/achiever.jpg";
import consi from "./assets/cons.jpg";
import patience from "./assets/patience.jpg"

function App() {
  

  return (
   <div className="container">
     <UserCard  name="Patience" desc="Calm, resilience." image={patience} style={{"border-radius":"10px"}}/> 
      <UserCard name="consistency" desc="Discipline, persistence" image={consi}style={{"border-radius":"10px"}}/> 
       <UserCard name="Achiever" desc="Determined, focused" image={achiver}style={{"border-radius":"10px"}}/> 
   </div>    
  )
}

export default App
