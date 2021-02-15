export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const SET_MEMORY = "SET_MEMORY";
export const CLEAR_MEMORY = "CLEAR_MEMORY";
export const MEMORY_RECALL = "MEMORY_RECALL";

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const changeOperator = (newOperator) => {
  return { type: CHANGE_OPERATION, payload: newOperator };
};

export const clearTotal = () => {
    return {type: CLEAR_DISPLAY}
}
export const setMemory = () => {
    return {type: SET_MEMORY}
}
export const clearMemory = () => {
    return {type: CLEAR_MEMORY}
}
export const memoryRecall = () => {
    return {type: MEMORY_RECALL}
}