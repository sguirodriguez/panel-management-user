import React, { useEffect, useState } from 'react'
import UsersScreen from './users.screen'
import { getUsers } from '../../pages/api/requests'
import { useToasts } from 'react-toast-notifications'

type Users = Array<{
  id: string
  name: string
  created_at: Date
  email: string
  gender: string
}>

const UsersController = () => {
  const [users, setUsers] = useState<Users>([])
  const [loading, setLoading] = useState(false)
  const { addToast } = useToasts()

  const getUsersList = async () => {
    setLoading(true)
    const response = await getUsers()
    setLoading(false)
    if (!response) {
      return addToast('Usuários não econtrados.', { appearance: 'error' })
    }
    addToast('Usuários econtrados!', { appearance: 'success' })
    return setUsers(response)
  }

  useEffect(() => {
    getUsersList()
  }, [])

  const handlers = {
    users,
    loading,
  }

  return <UsersScreen handlers={handlers} />
}

export default UsersController
