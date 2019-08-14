export const CLOSE_MENU = 'CLOSE_MENU';
export const TOGGLE_MENU = 'TOGGLE_MENU';

export const toggleMenu = (...args) => async (dispatch, getState, helpers) => {
  dispatch({type: TOGGLE_MENU});
};

export const closeMenu = (...args) => async (dispatch, getState, helpers) => {
  dispatch({type: CLOSE_MENU});
};
