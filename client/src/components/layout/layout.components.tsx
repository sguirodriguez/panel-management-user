import React, { ReactNode, CSSProperties } from 'react'
import Image from 'next/image'
import {
  Container,
  Header,
  Left,
  Right,
  Main,
  Rectangle,
  Dashboard,
  Content,
  Tab,
  TabTitle,
  NavBar,
  IconAddUsers,
  IconRemoveUsers,
  IconEditUser,
  IconListUsers,
} from './layout.styles'
import LogoPrimary from '../../assets/images/tec.png'
import { useRouter } from 'next/router'

interface LayoutProps {
  children?: ReactNode
  contentStyle?: CSSProperties
}

const Layout = ({ children, contentStyle }: LayoutProps) => {
  const router = useRouter()
  return (
    <Container>
      <Header>
        <Left>
          <Image src={LogoPrimary} width={80} height={60} />
        </Left>
        <Right>
          <NavBar
            onClick={() => {
              router.push(`/`)
            }}
          >
            <IconAddUsers />
          </NavBar>
          <NavBar
            onClick={() => {
              router.push(`/users`)
            }}
          >
            <IconListUsers />
          </NavBar>
          <NavBar
            onClick={() => {
              router.push(`/edit-user`)
            }}
          >
            <IconEditUser />
          </NavBar>
          <NavBar
            onClick={() => {
              router.push(`/delete-user`)
            }}
          >
            <IconRemoveUsers />
          </NavBar>
        </Right>
      </Header>

      <Main>
        <Rectangle className="rectangle">
          <Tab
            onClick={() => {
              router.push(`/`)
            }}
          >
            <IconAddUsers />
            <TabTitle className="tab-title">Criar usuário</TabTitle>
          </Tab>
          <Tab
            onClick={() => {
              router.push(`/users`)
            }}
          >
            <IconListUsers />
            <TabTitle className="tab-title">Usuários</TabTitle>
          </Tab>
          <Tab
            onClick={() => {
              router.push(`/edit-user`)
            }}
          >
            <IconEditUser />
            <TabTitle className="tab-title">Editar usuário</TabTitle>
          </Tab>
          <Tab
            onClick={() => {
              router.push(`/delete-user`)
            }}
          >
            <IconRemoveUsers />
            <TabTitle className="tab-title">Deletar usuário</TabTitle>
          </Tab>
        </Rectangle>

        <Dashboard>
          <Content style={contentStyle ? contentStyle : {}}>{children}</Content>
        </Dashboard>
      </Main>
    </Container>
  )
}

export default Layout
