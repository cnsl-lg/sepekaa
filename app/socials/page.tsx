import Image from 'next/image'
import React from 'react'
import { socials } from '../lib/staticData'
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function socialsPage() {
  return (
    <main>
      <div className="mx-auto max-w-5xl py-28 px-6 lg:px-8">
        <section className='flex flex-col items-center text-center gap-y-4'>
          <Image 
            src={'/sepekaa-logo.jpg'}
            alt='Sepekaa Logo'
            width={96}
            height={96}
            className='rounded-full'
          />
          <h2 className='text-2xl font-bold md:text-3xl'>Want to know more?</h2>
          <p>We also include our social accounts. You can go visit him.</p>
        </section>
        <section className='flex flex-col justify-between gap-4 mt-12 md:flex-row'>
          {socials.map((social, i) => (
            <a href={social.link} target='_blank' className='block flex-1' key={social.name}>
              <Card key={i}>
                <CardHeader>
                  <figure className='flex items-center gap-x-4'>
                    <Image 
                      src={social.icon}
                      alt={`${social.name} logo`}
                      width={40}
                      height={40}
                    />
                    <figcaption>
                      <CardTitle className='text-xl'>{social.name}</CardTitle>
                    </figcaption>
                  </figure>
                </CardHeader>
              </Card>
            </a>
          ))}
        </section>
      </div>
    </main>
  )
}
