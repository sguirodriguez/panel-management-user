import React from 'react'
import Layout from '../../components/layout/layout.components'
import { Title, Box, ContainerInputs } from './editUser.styles'
import InputComponent from '../../components/input/input.components'
import Select from '../../components/select/select.components'
import ButtonComponent from '../../components/button/button.components'
import Loading from '../../components/loading/loading.components'

type EditUserProps = {
  handlers: {
    handleSubmit: (event: any) => void
    setId: (value: string) => void
    setName: (value: string) => void
    setEmail: (value: string) => void
    setGender: (value: string) => void
    setPassword: (value: string) => void
    loading: boolean
  }
}

const EditUserScreen = ({ handlers }: EditUserProps) => {
  const {
    handleSubmit,
    setId,
    setName,
    setEmail,
    setGender,
    setPassword,
    loading,
  } = handlers
  return (
    <Layout>
      <Title>Editar usuário</Title>
      <Box>
        {loading ? (
          <Loading />
        ) : (
          <form className="row g-3 needs-validation">
            <ContainerInputs>
              <InputComponent
                id="input"
                placeholder="ID"
                label="ID"
                onChange={(value: any) => {
                  setId(value.target.value)
                }}
                required
              />
              <InputComponent
                id="input"
                placeholder="Nome"
                label="Nome"
                onChange={(value: any) => {
                  setName(value.target.value)
                }}
              />
              <InputComponent
                id="input"
                placeholder="Email"
                label="Email"
                type="email"
                onChange={(value: any) => {
                  setEmail(value.target.value)
                }}
              />
              <Select
                id="select"
                label="Gênero"
                onChange={(value: any) => setGender(value.target.value)}
              />
              <InputComponent
                id="input"
                placeholder="Senha"
                label="Senha"
                type="password"
                onChange={(value: any) => {
                  setPassword(value.target.value)
                }}
              />
              <ButtonComponent onChange={handleSubmit} text="Editar" />
            </ContainerInputs>
          </form>
        )}
      </Box>
    </Layout>
  )
}

export default EditUserScreen
