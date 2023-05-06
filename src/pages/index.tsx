import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col p-24 ${inter.className}`}>
      <div className={``} style={{backgroundColor: "gray", minWidth: '50%', maxWidth: '50%',}}>1234</div>
    </main>
  )
}
