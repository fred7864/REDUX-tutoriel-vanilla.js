// Action
const BUY_PHONE = 'BUY-PHONE';
const BUY_PC = 'BUY-PC';
const BUY_TV = 'BUY-TV';


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

function BuyTv() {
    return{
        type: BUY_TV
    }
}

// Reducer

const initialStateDevice = {
    phones: 5,
    pc:10
}

const initialStateTv = {
    tv: 15
}

const DeviceReducer = (state = initialStateDevice, action) => {
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

const TvReducer = (state = initialStateTv, action) => {
    switch (action.type) {
        case BUY_TV:
            return {
                ...state,
                tv: state.tv -1
            }
        default: return state
    }
}

// Combine Reducers
const rootReducer = Redux.combineReducers({
    device: DeviceReducer,
    tv: TvReducer
})

// Créer le STORE
const store = Redux.createStore(rootReducer);

// Récupérer la data du Store
const availablePhones =  document.getElementById('count');
const availablePC =  document.getElementById('count-pc');
const availableTV =  document.getElementById('count-tv');
availablePhones.innerHTML = store.getState().device.phones;
availablePC.innerHTML = store.getState().device.pc;
availableTV.innerHTML = store.getState().tv.tv;
console.log(store.getState())




//Effectuer le dispatch d'une action
document.getElementById('buy-phone').addEventListener('click', function() {
    store.dispatch(buyPhone())
})
document.getElementById('buy-pc').addEventListener('click', function() {
    store.dispatch(buyPc())
})
document.getElementById('buy-tv').addEventListener('click', function() {
    store.dispatch(BuyTv())
})


// Listener
store.subscribe(() => {
    availablePhones.innerHTML = store.getState().device.phones;
    availablePC.innerHTML = store.getState().device.pc;
    availableTV.innerHTML = store.getState().tv.tv;
    console.log('updated state', store.getState())
})









