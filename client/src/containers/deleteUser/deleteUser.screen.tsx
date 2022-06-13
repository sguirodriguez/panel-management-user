import React from 'react'
import Layout from '../../components/layout/layout.components'
import { Title, Box, ContainerInputs } from './deleteUser.styles'
import InputComponent from '../../components/input/input.components'
import ButtonComponent from '../../components/button/button.components'
import Loading from '../../components/loading/loading.components'

type DeleteUserProps = {
  handlers: {
    setId: (text: string) => void
    handleSubmit: (value: any) => void
    loading: boolean
  }
}

const DeleteUserScreen = ({ handlers }: DeleteUserProps) => {
  const { setId, handleSubmit, loading } = handlers
  return (
    <Layout>
      <Title>Deletar usuário</Title>
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
              <ButtonComponent onChange={handleSubmit} text="Deletar" />
            </ContainerInputs>
          </form>
        )}
      </Box>
    </Layout>
  )
}

export default DeleteUserScreen
