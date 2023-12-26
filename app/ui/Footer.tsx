import Image from 'next/image'
import React from 'react'
import { pagesLink, socials } from '../lib/staticData'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='bg-slate-200 mt-auto'>
      <div className='mx-auto max-w-5xl pt-28 pb-10 px-6 lg:px-8 divide-y divide-slate-400'>
        <div className='flex flex-col gap-y-12 justify-between text-sm font-medium pb-4 md:flex-row'>
          <section className='md:w-[40%]'>
            <div className='flex items-center gap-x-2 mb-4'>
              <Image
                src={'/sepekaa-logo.jpg'}
                alt='Sepekaa Logo'
                width={40}
                height={40}
                className='rounded-full border border-slate-400'
              />
              <span className='font-bold text-xl'>Sepekaa</span>
            </div>
            <p className='text-slate-800'>Engaging class, experienced teachers, innovative methods. Discover potential!</p>
          </section>
          <section className='md:w-[40%] flex justify-between'>
            <div className='w-1/2'>
              <span className='inline-block mb-4'>Navigation</span>
              <ul>
                {pagesLink.map((link, i) => (
                  <li key={i} className='mb-2 text-slate-800 transition-colors hover:text-black'>
                    <Link href={link.href}>{link.pathname}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='w-1/2'>
              <span className='inline-block mb-4'>Socials</span>
              <ul>
                {socials.map((social, i) => (
                  <li key={i} className='mb-2 text-slate-800 transition-colors hover:text-black'>
                    <a href={social.link} target='_blank'>{social.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
        <div className='flex justify-between text-sm pt-4'>
          <p>&copy; 2024 Sepekaa_01, All rights reserved.</p>
          <p className='hidden md:block'>Build with 💓 by cnsl-lg</p>
        </div>
      </div>
    </footer>
  )
}
