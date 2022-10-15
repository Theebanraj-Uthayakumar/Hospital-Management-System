import { call, put, takeEvery, takeLatest } from "redux-saga/effects"

// Login Redux States
import { LOGIN_USER, LOGOUT_USER } from "./actionTypes"
import { apiError, loginSuccess, logoutUserSuccess } from "./actions"
import axios from "axios";

function* loginUser({ payload: { user, history } }) {
  console.log("Login Step 02");
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: user.email,
      password: user.password,
    })
  };

  fetch('http://localhost:4000/api/v1/auth/login', requestOptions)
  .then(response => response.json())
  // .then(data => setGetDoctors(data))
  .then(data => {
    if(data.status_code === 200){
      localStorage.setItem("authUser", JSON.stringify(data));
      history.push("/dashboard")
    } else{
      console.log(data.error_Message);
      swal("Warning!", `${data.error_Message}`, "warning");
    }
  })
  // if(user.email === "admin@themesbrand.com" || user.password === "123456"){
  //   const response = {
  //     email: user.email,
  //     password: user.password,
  //   }
  //   localStorage.setItem("authUser", JSON.stringify(response))
  //   // yield put(loginSuccess(response))
  //   history.push("/dashboard")
  // }
}

function* logoutUser({ payload: { history } }) {
  try {
    localStorage.removeItem("authUser")

    history.push("/login")
  } catch (error) {
    yield put(apiError(error))
  }
}

function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser)
  yield takeEvery(LOGOUT_USER, logoutUser)
}

export default authSaga
