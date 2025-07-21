import type { Prisma } from "@prisma/client"
import { prisma } from "../utils/prisma"
import { getPublicURL } from "../utils/url"

export const findUserByEmail = async (email: string) => {
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

export const findUserBySlug = async (slug: string ) => {
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

export const createUser = async ( data:{ slug: string, name: string, email: string, password: string } ) => {
  const newUser = await prisma.user.create({ data })

  return {
    ...newUser,
    avatar: getPublicURL(newUser.avatar),
    cover: getPublicURL(newUser.cover)
  }
}

export const getUserFollowingCount = async (slug: string) => {
  const count = await prisma.follow.count({
    where: {
      user1Slug: slug
    }
  })

  return count
}

export const getUserFollowersCount = async (slug: string) => {
  const count = await prisma.follow.count({
    where: {
      user2Slug: slug
    }
  })

  return count
}

export const getUserTweetCount = async (slug: string) => {
  const count = await prisma.tweet.count({
    where: {
      userSlug: slug
    }
  })

  return count
}

export const checkIfFollows = async(user1Slug:string, user2Slug: string) => {
  const follows = await prisma.follow.findFirst({
    where: { user1Slug,user2Slug }
  })
  return follows ? true : false
}

export const follow = async(user1Slug:string, user2Slug: string) => {
  await prisma.follow.create({
    data: {user1Slug,user2Slug}
  })
}

export const unfollow = async(user1Slug:string, user2Slug: string) => {
  await prisma.follow.deleteMany({
    where: {user1Slug,user2Slug}
  })
}

export const updateUserInfo = async (slug: string, data: Prisma.UserUpdateInput) => {
  await prisma.user.update({
    where: { slug },
    data
  })
}

export const getUserFollowing = async(slug: string) => {
  const following = []
  const reqFollow = await prisma.follow.findMany({
    select: {user2Slug: true},
    where: {user1Slug: slug}
  })

  for(let reqItem of reqFollow) {
    following.push(reqItem.user2Slug)
  }

  return following
}