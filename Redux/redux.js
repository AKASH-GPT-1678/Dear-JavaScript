// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'INC':
      return { ...state, counter: state.counter + 1 };
    case 'DEC':
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}

// Initial state
const initialState = {
  counter: 3
};

// Create Redux store
const store = Redux.createStore(reducer, initialState);

// Update view
function updateView() {
  document.querySelector('#counter').innerText = store.getState().counter;
}


store.subscribe(updateView);

// Initial render
updateView();

// Button listeners
document.querySelector('#incBtn').addEventListener('click', () => {
  store.dispatch({ type: 'INC' });
});

document.querySelector('#decBtn').addEventListener('click', () => {
  store.dispatch({ type: 'DEC' });
});
