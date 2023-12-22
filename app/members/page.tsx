import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'
import { students } from '../lib/staticData'

export const metadata: Metadata = {
  title: 'Members',
  description: 'We consist of 12 male students, 8 female students, and one homeroom teacher. And we also have one teacher specializing in software engineering'
}

export default function membersPage() {
  return (
    <main className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-5xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet the members</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">We consist of 12 male students, 8 female students, and one homeroom teacher. And we also have one teacher specializing in software engineering</p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {students.map(student => (
            <li key={student.absence}>
              <div className="flex items-center gap-x-6">
                <Image
                  src={student.photo}
                  alt={`${student.name}'s photo`}
                  width={50}
                  height={50}
                  className="h-16 w-16 rounded-full"
                />
                <div className='truncate'>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{student.name}</h3>
                  <p className="text-sm truncate font-semibold leading-6 text-indigo-600">{student.email}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
