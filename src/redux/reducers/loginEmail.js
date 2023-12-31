import { LOGIN } from "../actions";

const initialState = {
  content: null,
};
const myLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        content: action.payload.email,
      };
    default:
      return state;
  }
};
export default myLoginReducer;
