import { isAxiosError } from "axios"
import { axiosClients } from "../config"
import type {  User } from "../types"


 export  const getUser = async () => {
        try {
             const {data} = await axiosClients<User>('/users',)
             return data
        } catch (error) {
            if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.message);
        }
    }
}
 export  const updateUser = async (formData:User) => {
        try {
             const {data} = await axiosClients.patch<String>('/users',formData)
             return data
        } catch (error) {
            if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.message);

        }
    }
}
 export  const uploadImage = async (file:File) => {
    const formData = new FormData()
    formData.append('file', file)
        try {
         const { data: { image } }: { data: { image: string } } = await axiosClients.post('/users/image', formData);
        return image
        } catch (error) {
            if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.message);
        }
    }
}
