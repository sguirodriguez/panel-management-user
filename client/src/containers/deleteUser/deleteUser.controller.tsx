import React, { useState } from 'react'
import DeleteUserScreen from './deleteUser.screen'
import { deleteUser } from '../../pages/api/requests'
import { useToasts } from 'react-toast-notifications'

const DeleteUserController = () => {
  const [id, setId] = useState('')
  const [loading, setLoading] = useState(false)
  const { addToast } = useToasts()

  const handleSubmit = (event: any) => {
    if (id) {
      event.preventDefault()
      return deleteUserById()
    }
    return
  }

  const deleteUserById = () => {
    setLoading(true)
    const response = deleteUser({ id })
    setLoading(false)
    if (!response) {
      return addToast('Não foi possível deletar o usuário.', {
        appearance: 'error',
      })
    }
    return addToast('Usuário deletado!', { appearance: 'success' })
  }

  const handlers = {
    setId,
    handleSubmit,
    loading,
  }
  return <DeleteUserScreen handlers={handlers} />
}

export default DeleteUserController
