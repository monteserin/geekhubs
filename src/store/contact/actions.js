export const setNameAction = 'SET_USER_NAME';
export const setEmailAction = 'SET_USER_EMAIL';
export const setMessageAction = 'SET_USER_MESSAGE';

export const setName = (contactName) => ({
    type: setNameAction,
    payload: contactName,
});


export const setEmail = (contactEmail) => ({
    type: setEmailAction,
    payload: contactEmail,
});


export const setMessage = (contactMessage) => ({
    type: setMessageAction,
    payload: contactMessage,
});

