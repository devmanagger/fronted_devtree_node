import { useState } from "react"
import { social } from "../data"
import { DevTreeInpu } from "../components"

export const LinkTreeView = () => {
    //State for social links
    const [devTreeLinks, setDevTreeLinks]= useState(social)

    //HandleUrlChange

    const handleUrlChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        //ingresa el valor y el nombre del input
        const updatedLinks = devTreeLinks.map(link => link.name === e.target.name ? {...link, url: e.target.value} : link)
        console.log(updatedLinks)
        //actualiza el estado
        setDevTreeLinks(updatedLinks)
    }
  return (
    <div className="space-y-5">
        {devTreeLinks.map(item =>(
            <DevTreeInpu key={item.name} item={item} handleUrlChange ={handleUrlChange} />
        ))}
    </div>
  )
}
