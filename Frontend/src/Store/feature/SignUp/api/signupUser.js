
import { SIGNUP_USER } from "../../../../constants/api";
import { apiSlice } from "../../../api";

export const signupUserApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        signupUser: build.mutation({
            query: (body) => ({
                url: SIGNUP_USER,
                method: 'POST',
                body
            }),
        }),
    }),
})

export const { useSignupUserMutation } = signupUserApi;