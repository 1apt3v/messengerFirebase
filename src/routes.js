import Chat from "./component/Chat";
import Login from "./component/Login";
import { CHAT_ROUTE, LOGIN_ROUTE } from "./utils/consts";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    }
]

export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        Component: Chat
    }
]