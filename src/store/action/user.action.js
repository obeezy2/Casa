import { userService } from "../../services/user.service";
import { httpService } from "../../services/http.service.js"

export function onLogin(credentials) {
  return async (dispatch) => {
    try {
      const user = await userService.login(credentials);
      
      dispatch({
        type: "SET_USER",
        user,
      });
    } catch (err) {
      console.error(err);
    }
  };
}

// export function onLogout() {
//   try {
//     return async (dispatch) => {
//       const user = await userService.logout(credentials);

//       dispatch({
//         type: "SET_USER",
//         user: null,
//       });
//     };
//   } catch (err) {
//     console.log("Failed to load logout", err);
//   }
// }
export function onSignup(newUser) {
  try {
    return async (dispatch) => {
      const user = await userService.signup(newUser);
      // sign up user on server
      // const user = await httpService.post('auth/signup', newUser)
      dispatch({
        type: "SET_USER",
        user: user,
      });
    };
  } catch (err) {
    console.log("Failed to signup", err);
  }
}
