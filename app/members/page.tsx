import { Metadata } from 'next'
import Image from 'next/image'
import React, { Suspense } from 'react'
import { students } from '../lib/staticData'
import Loading from './loading'
import { Skeleton } from '@/components/ui/skeleton'

export const metadata: Metadata = {
  title: 'Members',
  description: 'We consist of 12 male students, 8 female students, and one homeroom teacher. And we also have one teacher specializing in software engineering'
}

export default function membersPage() {
  return (
    <main className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <section>
          <p className="text-base font-semibold leading-7 text-indigo-600">sepekaa/members</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet the members</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">We consist of 12 male students, 8 female students, and one homeroom teacher. And we also have one teacher specializing in software engineering</p>
        </section>
        <Suspense fallback={<Loading />}>
          <ul role="list" className="mt-8">
            {students.map(student => (
              <li className="flex justify-between gap-x-6 py-5" key={student.absence}>
                <div className="flex min-w-0 gap-x-4">
                  <Image className="flex-none rounded-full bg-gray-50" src={student.photo} alt="" width={56} height={56} />
                  <div className="min-w-0 flex-auto">
                    <p className="font-semibold leading-6 text-gray-900">{student.name}</p>
                    <p className="mt-1 truncate text-sm leading-5 text-gray-500">{student.email ? student.email : 'No email required'}</p>
                  </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-gray-900">{student.className}</p>
                </div>
              </li>
            ))}
          </ul>
        </Suspense>
      </div>
    </main>
  )
}
