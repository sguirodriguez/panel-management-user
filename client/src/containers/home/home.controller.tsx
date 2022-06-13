import React, { useEffect, useState } from 'react'
import HomeScreen from './home.screen'
import { createUser } from '../../pages/api/requests'
import { useToasts } from 'react-toast-notifications'

const HomeController = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { addToast } = useToasts()

  const handleSubmit = (event: any) => {
    if (name && email && gender && password) {
      event.preventDefault()
      return createNewUser()
    }
    return
  }

  const createNewUser = async () => {
    setLoading(true)
    const response = await createUser({ name, email, gender, password })
    setLoading(false)
    if (!response) {
      return addToast('Erro ao criar usuário.', { appearance: 'error' })
    }
    return addToast('Usuário criado com sucesso!', { appearance: 'success' })
  }

  const handlers = {
    setName,
    setEmail,
    setGender,
    setPassword,
    handleSubmit,
    loading,
  }

  return <HomeScreen handlers={handlers} />
}

export default HomeController
