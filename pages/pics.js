import Image from "next/image"

export default function Picpage() {
  return (
    <div>
        {
        ['2','3','4','5','6'].map(path=>{
            return(
                <div  key={path}>
                    <Image src={`/${path}.jpg`} alt="pic" width='280' height='420' />
                   
                </div>
            )
        })}
        
    </div>
  )
}
