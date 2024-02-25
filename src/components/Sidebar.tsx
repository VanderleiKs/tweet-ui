import Image from "next/image";
import { Button } from "./ui/Button";
import { Bell, Bookmark, Hash, Home, HomeIcon, List, Mail, MessageSquareText, MoreHorizontal, User } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 w-[300px] h-screen p-4">
      <Image src={"./assets/logo.svg"} width={50} height={50} alt="logo"/>
      <nav className="flex flex-col gap-6">
        <a className="link-sidebar" href="#"><Home className="size-5 twitter-color" /> Home</a>
        <a className="link-sidebar" href="#"><Hash className="size-5" /> Explore</a>
        <a className="link-sidebar" href="#"><Bell className="size-5" /> Notifications</a>
        <a className="link-sidebar" href="#"><Mail className="size-5" /> Messages</a>
        <a className="link-sidebar" href="#"><Bookmark className="size-5" /> Bookmarks</a>
        <a className="link-sidebar" href="#"> <List className="size-5" /> Lists</a>
        <a className="link-sidebar" href="#"><User className="size-5" /> Profile</a>
        <a className="link-sidebar" href="#"> <MoreHorizontal className="size-5" /> More</a>
      </nav>
      <Button>Tweet</Button>
    </aside>
  )
}