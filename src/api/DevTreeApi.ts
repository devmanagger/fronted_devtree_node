import { isAxiosError } from "axios"
import { axiosClients } from "../config"
import type { User } from "../types"


 export  const getUser = async () => {

        try {
             const {data} = await axiosClients.get<User>('/users',)
             return data
        } catch (error) {
            if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.message);

        }
    }
}
