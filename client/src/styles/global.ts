import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const GlobalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 62.5%;
  }
`
export const TextDefault = styled.span`
  color: #34423D; 
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 400;
`

export const TextSemiBold = styled(TextDefault)`
  font-weight: 600;
`

export const TextBold = styled(TextDefault)`
  font-weight: 700;
`

export const TextExtraBold = styled(TextDefault)`
  font-weight: 800;
`

export const colors = {
  white:'#FFFFFF',
  black: '#34423D',
  gray:'#EAEFED',
  background:'#F9FAF9',
  primaryColor:'#22E0A1',
  secondaryColor:'#034AFD',
  statusColor:'#B5F1DD',
  statusColorInactive:'#EAEFED',
  textColor:'#587169',
  inputLabel:'#A3B8B0',
  inputIcon:'#587169',
  tableBorderColor:'#CAD6D1',
  iconTableColor:'#587169',
  borderButtonAccordionColor:'#B5F1DD',
  iconToolTipColor:'#A3B8B0',
  backgroundColumnInfo: '#F5FAF8',
  dataTitleColor:'#587169',
  textTableBodyColor:'#587169'
}

