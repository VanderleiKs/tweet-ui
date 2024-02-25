'use client'

import { Moon, SunMoon } from "lucide-react";
import { useState, useEffect } from "react";
import { NewTweet } from "./NewTweet";
import { Tweet } from "./Tweet";


interface Tweet{
  id: number,
  user: {
    username: string,
    url: string
  },
  name: string,
  content: string

}

export function Content() {
  const [theme, setTheme] = useState("light");
  const [tweets, setTweets] = useState<Tweet[]>([]);
  
  useEffect(() => {
    document.getElementById("root")?.setAttribute("class", theme);
  }, [theme]);


  let user = {
    username: "vanderleiks",
    url: `https://github.com/vanderleiks.png`
  }

  function createNewTweet(e: any) {
    const tweet = {
      id: tweets.length + 1,
      user: user,
      name: 'Vanderlei k silva',
      content: e
    }

    setTweets([tweet, ...tweets])
    
  }

  return (
    <div className="flex flex-col border-l-[1px] border-r-[1px] border-opacity-90 w-full max-w-5xl">
      <div className="px-4 pb-4">
        <div className="flex justify-between items-center pt-2 pb-6">
          <span className="text-2xl font-bold">Home</span>
        <div className="flex justify-end">
          <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            {theme === "light" ? <Moon className="size-4"/> : <SunMoon className="size-4"/>}
              
          </button>
        </div>
        </div> 
      <NewTweet user={user} newTweet={createNewTweet}/>
      </div>
      <div className="h-3 filter backdrop-brightness-95"/>
      <div className="flex flex-col">
        {tweets.map((tweet) => {
          return <Tweet key={tweet.id} user={tweet.user} name={tweet.name} content={tweet.content}/>
        })}
      </div>
  </div>

  )
}