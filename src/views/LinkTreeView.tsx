import { useState } from "react"
import { social } from "../data"
import { DevTreeInpu } from "../components"
import { isValidUrl } from "../utils"
import { toast } from "sonner"


export const LinkTreeView = () => {
    //State for social links
    const [devTreeLinks, setDevTreeLinks]= useState(social)

    //HandleUrlChange

    const handleUrlChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        //ingresa el valor y el nombre del input
        const updatedLinks = devTreeLinks.map(link => link.name === e.target.name ? {...link, url: e.target.value} : link)
        //actualiza el estado
        setDevTreeLinks(updatedLinks)
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
        console.log('Toggle clicked', SocialNetwork)
        setDevTreeLinks(updatedLinks)
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
    </div>
  )
}
