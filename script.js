// Action
const BUY_PHONE = 'BUY-PHONE';
const BUY_PC = 'BUY-PC';

function buyPhone() {
    return {
        type: BUY_PHONE
    }
}

function buyPc() {
    return {
        type: BUY_PC
    }
}


// Reducer

const initialState = {
    phones: 5,
    pc:10
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_PHONE:
            return {
                ...state,
                phones: state.phones -1
            }
            break;
        case BUY_PC:
            return{
                ...state,
                pc: state.pc -1
            }
        default: return state
    }
}

// Créer le STORE
const store = Redux.createStore(reducer);

// Récupérer la data du Store
const availablePhones =  document.getElementById('count');
const availablePC =  document.getElementById('count-pc');
availablePhones.innerHTML = store.getState().phones;
availablePC.innerHTML = store.getState().pc;



//Effectuer le dispatch d'une action
document.getElementById('buy-phone').addEventListener('click', function() {
    store.dispatch(buyPhone())
})
document.getElementById('buy-pc').addEventListener('click', function() {
    store.dispatch(buyPc())
})


// Listener
store.subscribe(() => {
    availablePhones.innerHTML = store.getState().phones;
    availablePC.innerHTML = store.getState().pc;
})









