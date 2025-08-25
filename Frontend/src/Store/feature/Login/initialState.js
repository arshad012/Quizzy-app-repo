
export const loginInitialState = {
    redirectTo: 'signup',
    phone: '',
    password: '',
    userLoginInfo: localStorage.getItem("userLoginInfo") ? JSON.parse(localStorage.getItem("userLoginInfo")) : null
}