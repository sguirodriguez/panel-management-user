import React, { useState } from 'react'
import EditUserScreen from './editUser.screen'
import { updateUserById } from '../../pages/api/requests'
import { useToasts } from 'react-toast-notifications'

const EditUserController = () => {
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { addToast } = useToasts()

  const handleSubmit = (event: any) => {
    if (id) {
      event.preventDefault()
      return updateUser()
    }
    return
  }

  const updateUser = async () => {
    setLoading(true)
    const response = await updateUserById({ id, name, email, gender, password })
    setLoading(false)
    if (!response) {
      return addToast('Erro ao atualizar o usuário.', { appearance: 'error' })
    }
    return addToast('Usuário atualizado com sucesso!', {
      appearance: 'success',
    })
  }

  const handlers = {
    handleSubmit,
    setId,
    setName,
    setEmail,
    setGender,
    setPassword,
    loading,
  }
  return <EditUserScreen handlers={handlers} />
}

export default EditUserController
