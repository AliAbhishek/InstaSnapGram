import api from ".."
import { paths } from "../endpoints"



export const postUserDetails=async (details)=>{
    const url = await api.post(paths.RegisteredUsers,details)
    return url?.data
}
export const getUserDetails=async ()=>{
    const url = await api.get(paths.RegisteredUsers)
    return url?.data
}