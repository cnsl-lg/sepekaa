type Links = {
  pathname: string
  href: string
}

type Socials = {
  name: string
  icon: string
  link: string
}

type Techs = {
  name: string
  type: string
  icon: string
  description: string
}

interface Student {
  name: string,
  photo: string,
  gender: string,
  birth: string,
  address: string,
  className: string,
  absence: number,
  email: string
}