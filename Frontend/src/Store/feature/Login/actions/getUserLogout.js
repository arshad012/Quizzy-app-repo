
export const getUserLogoutAction = (state, { payload }) => {

    payload.forEach((el) => {
        const { key, value } = el;
        state[key] = value;
    })

    localStorage.removeItem("userLoginInfo");
}