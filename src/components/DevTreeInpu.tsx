import type { DevTreeLinks } from "../types"

type DevTreeInputProps = {
    item: DevTreeLinks
}

export const DevTreeInpu = ({item}:DevTreeInputProps) => {

  return (
    <div className="bg-white shadow-sm p-5 flex items-center gap-3">
        <div
        style={{backgroundImage: `url(/social/icon_${item.name}.svg)`}}
        className="w-12 h-12 bg-cover">

        </div>
        <input type="text" className=" flex-1 border border-gray-100 rounded-xl" />
    </div>
  )
}
