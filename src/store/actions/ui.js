export const CLOSE_MENU = "CLOSE_MENU";
export const TOGGLE_MENU = "TOGGLE_MENU";
export const SCROLLED_Y = "SCROLLED_Y";

export const toggleMenu = () => async (dispatch, getState, helpers) => {
  dispatch({ type: TOGGLE_MENU });
};

export const closeMenu = () => async (dispatch, getState, helpers) => {
  dispatch({ type: CLOSE_MENU });
};

export const updateReadingPercentage = percent => async (dispatch, getState, helpers) => {
  dispatch({ type: SCROLLED_Y, percent });
};
