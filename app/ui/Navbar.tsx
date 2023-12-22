'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { usePathname, useRouter } from 'next/navigation'
import { pagesLink } from '../lib/staticData'


export default function Navbar() {
  const router = useRouter()
  const pathname = usePathname()
  const [header, setHeader] = useState(false)

  const scrollHeader = () => {
    if(window.scrollY >= 20) {
      setHeader(true)
    } else {
      setHeader(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader)

    return () => {
      window.removeEventListener('keydown', scrollHeader);
    }
  }, [])

  return (
    <header className={`${header ? 'backdrop-blur-md bg-white/30' : ''} fixed w-full z-50 transition duration-500 ease-in-out`}>
      <nav className="mx-auto max-w-6xl flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href={'/'} className='-m-1.5 p-1.5 font-semibold text-lg'>Sepekaa_01</Link>
        </div>
        <div className="hidden md:flex md:gap-x-12">
          {pagesLink.map((link, i) => (
            <Link
              href={link.href}
              key={i}
              className="font-semibold leading-6 text-gray-900"
            >
              {link.pathname}
            </Link>
          ))}
        </div>
        <div className='flex items-center gap-6 lg:flex-1 lg:justify-end'>
          <div className='md:hidden'>
            <DropdownMenu>
              <DropdownMenuTrigger className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 outline-none'>Menu</DropdownMenuTrigger>
              <DropdownMenuContent className='end-8'>
                <DropdownMenuLabel>Navigate</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {pagesLink.map((link, i) => (
                  <DropdownMenuItem key={i} onClick={() => router.push(link.href)}>{link.pathname}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex items-center gap-x-2">
            <FaGithub className='text-lg' />
            <Link href={''} target='_blank' className='hidden lg:block'>Available on GitHub</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
