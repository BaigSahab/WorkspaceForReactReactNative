import axios from "axios"
import { types } from "../type"

export const getUsersList = () => (dispatch) => {
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            dispatch({ type: types.GET_LIST, payload: response.data })
        })
}