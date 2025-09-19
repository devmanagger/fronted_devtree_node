import { useEffect, useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
//api
import { updateUser } from "../api"
import { social } from "../data"
// components
import { DevTreeInpu } from "../components"
import { isValidUrl } from "../utils"
import type { SocialNetwork, User } from "../types"


export const LinkTreeView = () => {
    //State for social links
    const [devTreeLinks, setDevTreeLinks]= useState(social)
   //mutation function
   const queryClient = useQueryClient()
   const user:User = queryClient.getQueryData(['users'])!

   const {mutate}= useMutation({
    mutationFn:updateUser,
    onSuccess:()=>{
        toast.success('Links updated successfully')
    },
    onError:(error)=>{
        toast.error(error.message)
    }
   })
   //Montando efecto 1 ves  cuando este listo
   useEffect(() => {
    const updateData =devTreeLinks.map(item =>{
        const userLink =JSON.parse(user.links).find((link:SocialNetwork )=>link.name === item.name)
        if(userLink){
            return{
                ...item,
                url:userLink.url,
                enabled:userLink.enabled
            }
        }
        return item
    })
 setDevTreeLinks(updateData)
   }, [])

    //HandleUrlChange
    const handleUrlChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        //ingresa el valor y el nombre del input
        const updatedLinks = devTreeLinks.map(link => link.name === e.target.name ? {...link, url: e.target.value} : link)
        //actualiza el estado
        setDevTreeLinks(updatedLinks)
           setDevTreeLinks(updatedLinks)
        queryClient.setQueryData(['users'],(prevData:User )=>{
            return {
                ...prevData,
                links:JSON.stringify(updatedLinks)

            }
        })
    }
    //Desabilitar el switch por ahora
    const handleSwitchLinks = (SocialNetwork: string) => {
        const updatedLinks = devTreeLinks.map(link => {
            if(link.name === SocialNetwork) {
                if(isValidUrl(link.url)){
                    return {...link, enabled: !link.enabled}
                }else{
                    toast.error('Please enter a valid URL',)
                }
            }
            return link
        })
        //setDevTreeLinks(updatedLinks)
        setDevTreeLinks(updatedLinks)
        queryClient.setQueryData(['users'],(prevData:User )=>{
            return {
                ...prevData,
                links:JSON.stringify(updatedLinks)

            }
        })
    }
  return (
    <div className="space-y-5">
        {devTreeLinks.map(item =>(
            <DevTreeInpu
            key={item.name}
            item={item}
            handleUrlChange ={handleUrlChange}
             handleSwitchLinks={handleSwitchLinks}
             />
        ))}
        <button
        onClick={()=>mutate(user)}
        className="
        bg-cyan-400
        p-2
        text-lgw
        w-full
        uppercase
        text-slate-600
        rounded-lg
        font-bold
        "
        >
            Save Changes
        </button>
    </div>
  )
}
