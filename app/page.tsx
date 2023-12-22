import Image from 'next/image'
import styles from './styles.module.css'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { techs } from './lib/staticData'


export default function Home() {
  return (
    <main>
      <div className="relative isolate px-6 h-screen flex items-center mini:h-auto sm:h-auto lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className={`${styles.box_one} relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]`}></div>
        </div>
        <section className="mx-auto max-w-5xl py-32 sm:py-48">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Welcome to Sepekaa Official Website</h1>
            <p className="mt-6 leading-8 text-gray-800 font-medium md:text-lg">We are class twelve majoring in software engineering at Vocational Hih School 2 Bangkalan, Madura &#40;2021 - 2024&#41;</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="https://www.instagram.com/sepekaa_01/" target='_blank' className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Follow Us</a>
              <a href="https://drive.google.com/drive/folders/10zMgesrXg7dqs1cXnP-zlAFdEcq4Q0wd" target='_blank' className="text-sm font-semibold leading-6 text-gray-900">See our photos <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div className={`${styles.box_two} relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]`}></div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl py-28 px-6 lg:px-8">
        <section className='flex flex-col items-center text-center gap-y-4'>
          <Image 
            src={'/sepekaa-logo.jpg'}
            alt='Sepekaa Logo'
            width={96}
            height={96}
            className='rounded-full'
          />
          <h2 className='text-2xl font-bold md:text-3xl'>Get to know us more closely</h2>
          <p>Sepekaa or by another name Sepekaa_01 is the name of the Software Engineering class at SMKN 2 Bangkalan. We are the class of 2021-2024, and we are currently in grade 3. We have 20 students consisting of 12 boys and 8 girls.</p>
        </section>
      </div>

      <div className="mx-auto max-w-5xl py-28 px-6 lg:px-8">
        <section>
          <h2 className='flex flex-col items-center justify-center text-center mb-6 font-medium lg:flex-row lg:gap-x-2'>
            <span className='text-2xl font-bold md:text-3xl'>What we learned?</span>
            <span className='md:text-xl'>here are some of the technologies we have studied.</span>
          </h2>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            {techs.map((tech, i) => (
              <Card key={i}>
                <CardHeader>
                  <figure className='flex gap-x-4'>
                    <Image 
                      src={tech.icon}
                      alt={`${tech.name} logo`}
                      width={48}
                      height={48}
                    />
                    <figcaption>
                      <CardTitle className='text-xl'>{tech.name}</CardTitle>
                      <CardDescription>{tech.type}</CardDescription>
                    </figcaption>
                  </figure>
                </CardHeader>
                <CardContent>
                  <p>{tech.description}</p>
                </CardContent>  
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
