import './App.css';
import { useDispatch, useSelector } from "react-redux";


function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector(state => state.showCounter)


  return (
      <div className="App" style={{backgroundColor:'#9aff00',padding:50,margin:30,}}>
          { show && <div style={{color: '#ed00ff',marginTop:35,marginBottom:35,fontSize:20,}}>Tushar Grades <h1>{counter}</h1> </div>}
          <button onClick=
                    {()=>{dispatch({type:"increment"});}}
                style={{margin:10,backgroundColor:'red',padding:10,color:'white',borderRadius:30,borderWidth:0,}}>Increment</button>

        <button onClick=
                    {()=>{dispatch({type:"decrement"});}}
                style={{margin:10,backgroundColor:'Blue',padding:10,color:'white',borderRadius:30,borderWidth:0,}}>Decrement</button>

    <button onClick=
                    {()=>{dispatch({type:"add 6",payload:6});}}
            style={{backgroundColor:'orange',padding:20,color:'white',borderRadius:50,borderWidth:0,}}>Add</button>
          <div>
              <button onClick=
                          {()=>{dispatch({type:"Toggle"});}}
                      style={{backgroundColor:'Pink',paddingTop:20,paddingBottom:20,paddingRight:40,paddingLeft:40,color:'black',borderRadius:50,borderWidth:0,}}>Toggle Button</button>
          </div>
      </div>

  );
}


export default App;
