const INITIAL_STATE = {
  initialSearchValue: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_SEARCH_VALUE": 
      return {...state, finalSearchValue: action.payload}
      
      default: return state;
  }
}