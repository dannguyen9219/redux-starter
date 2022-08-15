// Log every action that is dispatched

const logger = param => store => next => action => {
    console.log("Logging", param);
    next(action);
};
// Currying N => 1 parameter

export default logger;