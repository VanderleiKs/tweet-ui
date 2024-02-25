import { Heart, MessageCircle, RefreshCw, ThumbsUp } from "lucide-react";
import { Avatar, AvatarProps } from "./ui/Avatar";
import { ReactTweet } from "./ui/ReactTweet";

interface TweetProps {
  user: AvatarProps;
  name: string;
  content?: string;
}


export function Tweet(props: TweetProps) {
  return (
    <div className="flex gap-2 py-4 px-4 last:border-none border-b-[1px]">
      <div className="pr-1">
      <Avatar {...props.user} />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <strong>{props.name}</strong>
          <span className="text-gray-400">@{props.user.username}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span>{props.content}</span>
          <footer className="flex gap-16 my-4">
            <ReactTweet icon={<MessageCircle size={28}/>}/>
            <ReactTweet icon={<RefreshCw size={28}/>}/>
            <ReactTweet icon={<Heart size={28}/>}/>
          </footer>
        </div>
      </div>
    </div>
  );
}
