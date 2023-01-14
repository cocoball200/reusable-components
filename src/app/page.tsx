import Image from 'next/image'
import { Inter } from '@next/font/google'
import Input from "@/components/input";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline text-red-600 bg-red-100">
        Hello world!
      </h1>
      <Input />
    </main>
  )
}
