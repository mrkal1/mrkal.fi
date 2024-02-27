import Particlescomponent from '@/components/particlescomponent'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <main className="flex justify-center h-screen items-center flex-col p-4 ">
      <div className="-z-50"><Particlescomponent/></div>
      <div className="text-8xl font-semibold">
        404
      </div>
      <div className="flex gap-3 text-xl">
        <Link href="/">Return home</Link>
      </div>
    </main>
  )
}