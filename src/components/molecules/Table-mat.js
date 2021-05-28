import React, { useEffect, useState } from 'react';

import { DataGrid } from '@material-ui/data-grid';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


function TableMat(props) {
  useState(() => {
    }, [])
    const {handleSelect, data} = props
    const columns = [
        { field: 'name', headerName: 'Name', width: 150 },
        {
          field: 'price',
          headerName: 'ราคา',
          type: 'number',
        width: 110,
        sortable: false,
        },
        {
            field: 'number',
            headerName: 'จำนวน',
            type: 'number',
          width: 110,
          sortable: false,
          },
        {
            field: 'select', headerName: 'Select',sortable: false,
            renderCell: (params) => (
                <strong>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{ marginLeft: 16 }}
                    onClick={(e) => {
                    e.preventDefault();
                      handleSelect(params)}
                      }
                  >
                  เลือก
                  </Button>
                </strong>
              ),
        },
      ];
      
    return (
      <StyledBox  xs={8}>
            <DataGrid rows={data} columns={columns} pageSize={20} disableSelectionOnClick/>
        </StyledBox>
    );
}

const StyledBox = styled(Grid)`
  padding: 8px;
  height: 100vh;
`
export default TableMat;

