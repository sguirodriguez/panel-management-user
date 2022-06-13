import React from 'react'
import Layout from '../../components/layout/layout.components'
import { Box, Title, ContainerInputs } from './home.styles'
import InputComponent from '../../components/input/input.components'
import Select from '../../components/select/select.components'
import ButtonComponent from '../../components/button/button.components'
import Loading from '../../components/loading/loading.components'

type HomeProps = {
  handlers: {
    setName: (value: string) => void
    setEmail: (value: string) => void
    setGender: (value: string) => void
    setPassword: (value: string) => void
    handleSubmit: (event: any) => void
    loading: boolean
  }
}

const HomeScreen = ({ handlers }: HomeProps) => {
  const { setName, setEmail, setGender, setPassword, handleSubmit, loading } =
    handlers
  return (
    <Layout>
      <Title>Criar usuário</Title>
      <Box>
        {loading ? (
          <Loading />
        ) : (
          <form className="row g-3 needs-validation">
            <ContainerInputs>
              <InputComponent
                id="input"
                placeholder="Nome"
                label="Nome"
                onChange={(value: any) => {
                  setName(value.target.value)
                }}
                required
              />
              <InputComponent
                id="input"
                placeholder="Email"
                label="Email"
                type="email"
                onChange={(value: any) => {
                  setEmail(value.target.value)
                }}
                required
              />
              <Select
                id="select"
                label="Gênero"
                onChange={(value: any) => setGender(value.target.value)}
                required
              />
              <InputComponent
                id="input"
                placeholder="Senha"
                label="Senha"
                type="password"
                onChange={(value: any) => {
                  setPassword(value.target.value)
                }}
                required
              />

              <ButtonComponent onChange={handleSubmit} />
            </ContainerInputs>
          </form>
        )}
      </Box>
    </Layout>
  )
}

export default HomeScreen
