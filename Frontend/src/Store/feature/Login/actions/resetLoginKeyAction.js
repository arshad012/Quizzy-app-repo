
export const resetLoginKeyAction = (state, { payload }) => {

    payload.forEach((el) => {
        const { key, value } = el;
        state[key] = value;
    })
}