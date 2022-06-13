import styled from '@emotion/styled'
import { colors, TextDefault } from '../../styles/global'
import {
  IoPersonAddOutline,
  IoPersonRemoveOutline,
  IoFileTrayFull,
  IoPencil,
} from 'react-icons/io5'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${colors.white};
  font-size: 1.4rem;
  border-bottom: 1px solid ${colors.gray};
  display: flex;
  justify-content: flex-start;
`

export const Left = styled.div`
  height: 100%;
  width: 100px;
  border-right: 1px solid ${colors.gray};
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    border: 0px;
    width: 100px;
    justify-content: center;
  }
`

export const Right = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: flex;
    display: flex;
    border: 0px;
    flex: 1;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
  @media (max-width: 400px) {
    gap: 10px;
  }
`

export const NavBar = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`

export const Main = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: row;
`
export const Rectangle = styled.div`
  flex: 1;
  max-width: 99px;
  position: relative;
  z-index: 2;
  background-color: ${colors.white};
  box-shadow: 4px 0px 8px 0px rgba(165, 171, 179, 0.16);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;
  gap: 20px;

  &:hover {
    max-width: 140px;
  }

  @media (max-width: 900px) {
    display: none;
  }
`

export const Dashboard = styled.div`
  flex: 1;
  background-color: ${colors.background};

  @media (max-width: 700px) {
    max-height: 1000px;
  }

  @media (max-width: 576px) {
    overflow: auto;
    max-height: 1527px;
  }
`

export const Tab = styled.div`
  cursor: pointer;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  &:hover {
    padding: 0px 15px;
    background-color: ${colors.gray};
    .tab-title {
      display: block;
    }
  }
`

export const IconAddUsers = styled(IoPersonAddOutline)`
  font-size: 18px;
  color: ${colors.black};
`

export const IconRemoveUsers = styled(IoPersonRemoveOutline)`
  font-size: 18px;
  color: ${colors.black};
`

export const IconListUsers = styled(IoFileTrayFull)`
  font-size: 18px;
  color: ${colors.black};
`

export const IconEditUser = styled(IoPencil)`
  font-size: 18px;
  color: ${colors.black};
`

export const TabTitle = styled(TextDefault)`
  font-size: 1.1rem;
  display: none;
`

export const Content = styled.div`
  max-width: 58%;
  height: 100%;
  margin: auto;
  box-sizing: border-box;
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1910px) {
    padding-top: 40px;
    padding-bottom: 40px;
    max-width: 65%;
    max-height: 700px;
  }

  @media (max-width: 780px) {
    max-width: 90%;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  @media (max-width: 576px) {
    max-width: 90%;
    padding-top: 15px;
    padding-bottom: 15px;
  }
`
