import Image from "next/image";

export interface AvatarProps {
  username: string
  url: string
}


export function Avatar(props: AvatarProps){
  //const user = 'vanderleiks'
  return (
    <div className="rounded-full overflow-hidden w-10 h-10">
      <Image src={props.url} alt={props.username} width={72} height={72} />
    </div>
  )
}