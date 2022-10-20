import { useDispatch, useSelector } from "react-redux";
import {counterActions} from "../store/counter";


const Counter=()=> {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.counter);
    const show = useSelector((state) => state.counter.showCounter);


    return (
        <div className="App" style={{backgroundColor:'#eeebeb',padding:30,marginLeft:'20%',marginRight:'20%',marginTop:35,borderWidth:1,borderRadius:15,textAlign:'center',marginBottom:35}}>
            { show && <div style={{color: '#000000',marginTop:35,marginBottom:35,fontSize:20,fontWeight:'bold'}}>Tushar Grades <h1 style={{color:'#a535f0'}}>{counter}</h1> </div>}
            <button onClick=
                        {()=>{dispatch(counterActions.increment(0));}}
                    style={{margin:10,paddingRight:60,paddingLeft:60,borderRadius:10,fontWeight:'bold',fontSize:20,backgroundColor:'#a535f0',padding:10,color:'white',borderWidth:0}}>Increment</button>

            <button onClick=
                        {()=>{dispatch(counterActions.decrement(0));}}
                    style={{margin:10,paddingRight:60,paddingLeft:60,borderRadius:10,fontWeight:'bold',fontSize:20,backgroundColor:'#a535f0',padding:10,color:'white',borderWidth:0}}>Decrement</button>

            <button onClick=
                        {()=>{dispatch(counterActions.addSix(6));}}
                    style={{margin:10,backgroundColor:'#a535f0',paddingRight:60,paddingLeft:60,fontWeight:'bold',fontSize:20,borderRadius:10,padding:10,color:'white',borderWidth:0}}>Add</button>
            <div>
                <button onClick=
                            {()=>{dispatch(counterActions.Toggle());}}
                        style={{backgroundColor:'#a535f0',paddingTop:15,paddingBottom:15,fontWeight:'bold',fontSize:20,paddingRight:60,paddingLeft:60,color:'White',borderRadius:50,borderWidth:0,marginTop:25}}>Toggle Button</button>
            </div>
        </div>

    );
}


export default Counter;
