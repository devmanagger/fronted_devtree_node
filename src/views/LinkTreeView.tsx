import { useState } from "react"
import { social } from "../data"
import { DevTreeInpu } from "../components"

export const LinkTreeView = () => {
    //State for social links
    const [devTreeLinks, setDevTreeLinks]= useState(social)




  return (
    <div className="space-y-5">
        {devTreeLinks.map(item =>(
            <DevTreeInpu key={item.name} item={item} />
        ))}
    </div>
  )
}
