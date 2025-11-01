let state = {
    counter: 3
}

function dispatch(action) { }

document.querySelector('#inc').onclick = () => dispatch('INC');
document.querySelector('#dec').onclick = () => dispatch('DEC');

function updateView() {
    document.querySelector('#counter').innerText = state.counter;
}


function reducer(state, action) {
    switch (action) {
        case 'INC':
            return { ...state, counter: state.counter + 1 }

        case 'DEC':
            return { ...state, counter: state.counter - 1 };
        default: return state;
    }



}