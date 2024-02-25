import { useState } from "react";

interface ReactTweetProps{
    icon: any
}


export function ReactTweet({icon, ...props}: ReactTweetProps){
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

    return (
      <button className="flex gap-2 text-zinc-400 items-center"
      onClick={handleClick}>
        {icon}
        <span>{count}</span>
    </button>
    )
}