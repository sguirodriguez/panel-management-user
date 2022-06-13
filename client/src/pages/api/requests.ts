import axios from 'axios'

const BASE_URL = 'http://localhost:3003/api/v1/user'

type ResponseGetUsers = Array<{
  id: string
  name: string
  created_at: Date
  email: string
  gender: string
}>

type ResponseGetUserById = {
  id: string
  name: string
  email: string
  gender: string
  created_at: Date
}

type UserPayload = {
  name: string
  email: string
  gender?: string
  password: string
}
type UpdateUserPayload ={
  id:string
  name?: string
  email?: string
  gender?: string
  password?: string
}
export const getUsers = async (): Promise<ResponseGetUsers | null > => {
  try {
    const { data, status } = await axios.get(`${BASE_URL}`)
    if (status !== 200) {
      return null
    }
    return data
  } catch (error) {
    return null
  }
}

export const updateUserById = async ({
  id,
  name,
  email,
  gender,
  password,
}: UpdateUserPayload): Promise<ResponseGetUserById | null> => {
  try {
    const { data, status } = await axios.put(`${BASE_URL}/update`,{
      id,
      name,
      email,
      password,
      gender,
    })

    if (status !== 200) {
      return null
    }
    return data
  } catch (error) {
    return null
  }
}

export const createUser = async ({
  name,
  email,
  gender,
  password,
}: UserPayload): Promise<ResponseGetUserById | any> => {
  try {
    const { data, status } = await axios.post(`${BASE_URL}`, {  name,
      email,
      gender,
      password,})
    if (status !== 200) {
      return null
    }
    return data
  } catch (error) {
    return null
  }
}

export const deleteUser = async ({
 id
}:{id:any} ): Promise<{} | null> => {
  try {
    const { data, status } = await axios.delete(`${BASE_URL}`, {data:{ id}})
    if (status !== 200) {
      return null
    }
    return {}
  } catch (error) {
    return {}
  }
}
