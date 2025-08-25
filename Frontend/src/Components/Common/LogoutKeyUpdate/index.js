
export const logoutKeyUpdate = () => {
    return [{ key: "redirectTo", value: "login" }, { key: 'userLoginInfo', value: null }];
}