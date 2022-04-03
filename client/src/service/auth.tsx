import {useAppDispatch} from "../store";
import {authActions} from "../store/slices/authSlice";

const authToken = 'auth-token';

export const getUserToken = (): string => localStorage.getItem(authToken) as string;

export const useLoginUser = () => {
    const dispatch = useAppDispatch();

    return (userId: string, token: string) => {
        localStorage.setItem(authToken, token)
        dispatch(authActions.login({userId}));
    }
}

export const useLogoutUser = () => {
    const dispatch = useAppDispatch();

    return () => {
        localStorage.removeItem(authToken);
        dispatch(authActions.logout())
    }
}