export const getPublicURL =  (url: String) => {
  return `${process.env.BASE_URL}/${url}`
}