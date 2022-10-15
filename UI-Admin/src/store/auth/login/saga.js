import { call, put, takeEvery, takeLatest } from "redux-saga/effects"

// Login Redux States
import { LOGIN_USER, LOGOUT_USER } from "./actionTypes"
import { apiError, loginSuccess, logoutUserSuccess } from "./actions"

function* loginUser({ payload: { user, history } }) {
  console.log("Login Step 02");
  if(user.email === "admin@themesbrand.com" || user.password === "123456"){
    const response = {
      email: user.email,
      password: user.password,
    }
    localStorage.setItem("authUser", JSON.stringify(response))
    // yield put(loginSuccess(response))
    history.push("/dashboard")
  }
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
