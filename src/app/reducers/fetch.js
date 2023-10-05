export const fetchInitialState = {
  loading: false,
  error: null,
  data: null,
};

export const fetchAction = {
  FETCH_START: "FETCH_START",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR",
};

export const fetchReducer = (state, action) => {
  switch (action.type) {
    case fetchAction.FETCH_START:
      return {
        ...state,
        loading: true,
      };
    case fetchAction.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case fetchAction.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
