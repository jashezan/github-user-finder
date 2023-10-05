export const searchAction = {
  FETCH_START: "FETCH_START",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR",
};

export const searchReducer = (state, action) => {
  switch (action.type) {
    case searchAction.FETCH_START:
      return {
        ...state,
        loading: true,
      };
    case searchAction.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case searchAction.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
