import api from ".."
import { paths } from "../endpoints"



export const postUserDetails=async (details)=>{
    const url = await api.post(paths.RegisteredUsers,details)
    return url?.data
}