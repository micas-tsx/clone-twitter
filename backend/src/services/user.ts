import { prisma } from "../utils/prisma"
import { getPublicURL } from "../utils/url"

export const findUserByEmail = async (email: String) => {
  const user = await prisma.user.findFirst({
    where: { email }
  })

  if(user) {
    return {
      ...user,
      avatar: getPublicURL(user.avatar),
      cover: getPublicURL(user.cover)
    }
  }

  return null
}

export const findUserBySlug = async (slug: String ) => {
  const user = await prisma.user.findFirst({
    select: {
      avatar: true,
      cover: true,
      slug: true,
      name: true,
      bio: true,
      link: true,
    },
    where: { slug }
  })

  if(user) {
    return {
      ...user,
      avatar: getPublicURL(user.avatar),
      cover: getPublicURL(user.cover)
    }
  }

  return null
}