import Category from '@/components/Category'
import Food from '@/components/Food'
import HeadlineCards from '@/components/HeadlineCards'
import Hero from '@/components/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
    </main>
  )
}
