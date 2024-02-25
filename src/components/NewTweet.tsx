import { TextareaHTMLAttributes } from "react";
import { Avatar, AvatarProps } from "./ui/Avatar";
import { Button } from "./ui/Button";

interface NewTweetProps {
  user: AvatarProps

  newTweet: (e:any) => void
}




export function NewTweet(props: NewTweetProps) {
  return (
    <div>
      <form onSubmit={(e: any) => {
        e.preventDefault()
        props.newTweet(e.target[0].value)
      }} className="flex flex-col gap-4">
        <div className="flex gap-2">
          <Avatar {...props.user} />
          <textarea name="tweet" className="bg-transparent text-sm w-full focus:outline-none resize-none" 
            placeholder="What's happening?"/>
        </div>
        <div className="flex justify-end">
          <Button type="submit">Tweet</Button>
        </div>
      </form>
    </div>
  )
}