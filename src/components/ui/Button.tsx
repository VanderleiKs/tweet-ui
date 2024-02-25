import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    type: React.ButtonHTMLAttributes<HTMLButtonElement>["type"],
    children: string
}


export function Button(props: ButtonProps){
    return (
       <button  
       type={props.type}
       className={`
       bg-twitter-color text-white font-bold text-sm py-2.5 px-4 rounded-full
       `}>
        {props.children}
      </button>
    )
}
