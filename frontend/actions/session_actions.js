import * as APIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
// export const RECEIVE_DEMO_USER = "RECEIVE_DEMO_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

// receiveCurrentUser will accept an user object as an argument
export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser,
  };
};

// export const receiveDemoUser = (currentUser) => {
//   return {
//     type: RECEIVE_DEMO_USER,
//     currentUser,
//   };
// };

// logoutCurrentUser will not accept any arguments
export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  };
};

// receiveErrors will accept an errors array as an argument
export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors,
  };
};

// clearErrors will not accept any arguments
export const clearErrors = () => {
  return {
    type: CLEAR_SESSION_ERRORS,
  };
};

// signup will take in a user object as an argument
export const signup = (user) => (dispatch) => {
  return APIUtil.signup(user).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
};

// login will take in a user object as an argument
export const login = (user) => (dispatch) => {
  //   debugger;
  return APIUtil.login(user).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (err) => {
      return dispatch(receiveErrors(err.responseJSON));
    }
  );
};

// logout will not accept any arguments
export const logout = () => (dispatch) => {
  return APIUtil.logout().then((user) => dispatch(logoutCurrentUser()));
};

// export const loginDemoUser = (demoUser) => (dispatch) => {
//   debugger;
//   return APIUtil.loginDemoUser(demoUser).then(
//     (demoUser) => dispatch(receiveDemoUser(demoUser)),
//     (err) => {
//       return dispatch(receiveErrors(err.responseJSON));
//     }
//   );
// };
