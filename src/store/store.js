import { createStore } from "redux";



const initialState = {counter:0,showCounter:true};
const counterReducer = (state = initialState, action) => {

    if (action.type === "increment") {
        return { counter: state.counter + 1,
            showCounter: state.showCounter };
    }

    else if (action.type === "decrement") {
        return { counter: state.counter - 1,
            showCounter: state.showCounter};
    }
    else if (action.type === "add 6") {
        return { counter: state.counter + action.payload,
            showCounter: state.showCounter};
    }

    else if (action.type === "Toggle") {
        return { counter: state.counter,
            showCounter: !state.showCounter};
    }

    else {
        return state;
    }
};

const store = createStore(counterReducer);

export default store;