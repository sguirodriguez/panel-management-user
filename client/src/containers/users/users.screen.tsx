import React, { useState } from 'react'
import Layout from '../../components/layout/layout.components'
import { Title, Box, ContainerInputs } from './users.styles'
import DataTable from '../../components/dataTable/dataTable.componets'
import Loading from '../../components/loading/loading.components'
import InputComponent from '../../components/input/input.components'

type UsersProps = {
  handlers: {
    users: Array<{
      id: string
      name: string
      created_at: Date
      email: string
      gender: string
    }>
    loading: boolean
  }
}

type filteredByname = Array<{
  id: string
  name: string
  created_at: Date
  email: string
  gender: string
}>

const UsersScreen = ({ handlers }: UsersProps) => {
  const { users, loading } = handlers
  const [filteredByNameOrEmail, setFilteredByNameOrEmail] =
    useState<filteredByname>()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filterName = users?.filter(item =>
      String(item.name)
        ?.toLowerCase()
        ?.includes(String(event.target.value).toLowerCase())
    )

    setFilteredByNameOrEmail(filterName)
  }

  return (
    <Layout>
      <Title>Usuários</Title>
      <Box>
        <ContainerInputs>
          <InputComponent
            id="input"
            placeholder="Nome"
            label="Pesquise por nome"
            onChange={(value: any) => {
              handleChange(value)
            }}
          />
        </ContainerInputs>
        {loading ? (
          <Loading />
        ) : (
          <DataTable
            users={filteredByNameOrEmail ? filteredByNameOrEmail : users}
          />
        )}
      </Box>
    </Layout>
  )
}

export default UsersScreen
