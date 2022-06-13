import styled from '@emotion/styled'
import { TextExtraBold, colors } from '../../styles/global'

export const Title = styled(TextExtraBold)`
  font-size: 2rem;
`

export const Box = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.white};
  border-radius: 8px;
  box-shadow: 5px 5px 10px 0px rgba(165, 171, 179, 0.16);
  padding: 50px 24px;
  overflow: auto;
  @media (max-width: 1910px) {
    padding: 40px 24px;
  }

  @media (max-width: 576px) {
    padding: 20px 20px;
  }
`
export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
  align-items: flex-end;

  @media (max-width: 1050px) {
    justify-content: center;
    gap: 20px;
  }
`
