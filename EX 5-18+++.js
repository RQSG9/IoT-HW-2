const logger = store => next => action => {
    console.log('dispatching', action);
    console.log('next state', store.getState());
    return next(action);
};

const thunk = store => next => action => {
    typeof action === 'function'
        ? action(dispatch, store.getState)
        : next(action);
};