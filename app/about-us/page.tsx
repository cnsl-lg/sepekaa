import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'We want to introduce ourselves to you who we are and what we have done during the 3 years we have been at Vocational High School 2 Bangkalan.'
}

export default function aboutPage() {
  return (
    <main className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
          <defs>
            <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
            <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
          </svg>
          <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:max-w-5xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">sepekaa/about-us</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Know us too well</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">We want to introduce ourselves to you who we are and what we have done during the 3 years we have been at Vocational High School 2 Bangkalan.</p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src="/sepekaa.JPG" alt="Sepekaa photo" width={500} height={300} priority />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:max-w-5xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>Sepekaa or by another name Sepekaa_01 is the name of the Software Engineering class at SMKN 2 Bangkalan. We are the class of 2021-2024, and we are currently in grade 3. We have 20 students consisting of 12 boys and 8 girls. Our homeroom teacher is Ina Sukmawati and she is a mathematics teacher at our school. We also have a special vocational software engineering teacher who teaches in our class named Davis Nur Iqbal Rifandi.</p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">What we have learned</h2>
              <p className="mt-8">During these three years we have learned quite a lot about the world of IT, especially in the field of Web Development. We have studied the tech stack for front-end development such as HTML, CSS, and Javascript. We also learned various frameworks and libraries such as Bootstrap, Tailwind CSS, and React.JS. For the back-end, we have studied the PHP programming language and the framework, namely Laravel.</p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Our experience</h2>
              <p className="mt-6">We had internship experience in an industrial place that had been arranged by our teacher which was carried out for 6 months as a way for us to get to know the industrial world &#40;especially in the field of programming&#41;.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
