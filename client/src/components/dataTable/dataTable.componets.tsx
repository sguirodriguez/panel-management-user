import React from 'react'
import { CSSProperties } from 'react'
import { Column, ColumnTitle, Row, RowText } from './dataTable.styles'

type DataTableProps = {
  users: Array<{
    id: string
    name: string
    created_at: Date
    email: string
    gender: string
  }>
  columnStyle?: CSSProperties
  rowStyle?: CSSProperties
}

const DataTable = ({ users, columnStyle, rowStyle }: DataTableProps) => {
  const columns = [
    { title: 'ID' },
    { title: 'Name' },
    { title: 'Email' },
    { title: 'Gênero' },
    { title: 'Data de Criação' },
  ]

  const translatorGender: any = {
    male: 'Masculino',
    female: 'Feminino',
    others: 'Outros',
  }
  const modifyDateForShow = (date: string) => {
    const modifyDate = date.split('T')
    const takeDate = modifyDate[0].split('-')
    const year = takeDate[0]
    const month = takeDate[1]
    const day = takeDate[2]

    return <>{day + '/' + month + '/' + year}</>
  }
  return (
    <>
      <table className="table table-striped">
        <thead className="thead-dark">
          <Column style={columnStyle}>
            {columns?.map(item => {
              return <ColumnTitle scope="col">{item?.title}</ColumnTitle>
            })}
          </Column>
        </thead>
        <tbody>
          {users?.map(item => {
            return (
              <Row style={rowStyle}>
                <RowText>{item?.id}</RowText>
                <RowText>{item?.name}</RowText>
                <RowText>{item?.email}</RowText>
                <RowText>{translatorGender[item?.gender]}</RowText>
                <RowText>{modifyDateForShow(String(item?.created_at))}</RowText>
              </Row>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
export default DataTable
