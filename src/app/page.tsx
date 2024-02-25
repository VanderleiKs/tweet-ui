
import { Content } from "@/components/Content";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {

 
  return (
    <main className="flex mx-auto h-full w-full max-w-[1200px]">
      <Sidebar />
      <Content />
    </main>
  );
}
