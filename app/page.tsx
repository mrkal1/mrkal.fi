import Particlescomponent from "@/components/particlescomponent";

export default function Home() {
  return (
    <div className="flex justify-center h-screen items-center flex-col p-4">
      
      <div className="-z-50">
        <Particlescomponent/>
      </div>
      
      <div className="text-8xl font-semibold">
        Mr. Kal
      </div>
      
      <div className="flex gap-3 text-xl">
        <a href="https://github.com/mrkal666">Github</a>
        <a href="https://discord.gg/invite/Vrf9gGVMA3">Discord</a>
        <a href="https://github.com/mrkal666/mrkal.fi">Source</a>
      </div>
    </div>
  );
}
