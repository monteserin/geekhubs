import * as actions from './actions';

const initialState = {
    name: '',
    email: '',
    message: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.setNameAction:
            return { ...state, name: action.payload }
        case actions.setEmailAction:
            return { ...state, email: action.payload }
        case actions.setMessageAction:
            return { ...state, message: action.payload }
        default:
            return state;
    }
}

export const selectName = (store) => store.contact.name;
export const selectEmail = (store) => store.contact.email;
export const selectMessage = (store) => store.contact.message;


export default reducer;