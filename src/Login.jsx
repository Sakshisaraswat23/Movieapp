import React ,{useState} from "react";
import { useHistory } from "react-router-dom";

function Login() {

    const [isMousedOver, setMouseOver] = useState(false); 
    const history=useHistory();
  
    function handleMouseOver() { //for changing the isMousedOver value to true and hence changing bg colour of button to black
      setMouseOver(true);
    }
  
    function handleMouseOut() { //for changing back to white background, when mouse is moved over
      setMouseOver(false);
    }
    
    function newPage() {
      history.push("/movies");
    }
    
  return (
    <section className="bg">
    <form className="form">
       <h1>Welcome back!!</h1>
      <input type="text" placeholder="Username" required/>
      <input type="password" placeholder="Password" required/>
      <button style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick = {newPage}
         type="submit">Login</button>
    </form>
    </section>
  );
}

export default Login;
