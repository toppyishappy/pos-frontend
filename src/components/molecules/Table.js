import React from 'react'
import { useTable } from 'react-table'

function Table(props) {
    const data = React.useMemo(
        () => [
            {
                col1: 'ปากกา',
                col2: 'แดง',
            },
            {
                col1: 'สีทาบ้าน',
                col2: 'เขียว',
            },
            {
                col1: 'ไม้บรรทัด',
                col2: 'ส้ม',
            },
        ],
        []
    );
    const columns = React.useMemo(
        () => [
            {
                Header: 'สินค้า',
                accessor: 'col1', // accessor is the "key" in the data
            },
            {
                Header: 'แคตตาล็อก',
                accessor: 'col2',
            },
        ],
        []
    );
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });
    return (
        <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th
                                {...column.getHeaderProps()}
                                style={{
                                    borderBottom: 'solid 3px red',
                                    background: 'aliceblue',
                                    color: 'black',
                                    fontWeight: 'bold',
                                }}
                            >
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                    <td
                                        {...cell.getCellProps()}
                                        style={{
                                            padding: '10px',
                                            border: 'solid 1px gray',
                                            background: 'papayawhip',
                                        }}
                                    >
                                        {cell.render('Cell')}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}

export default Table;