import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  TextField,
} from '@mui/material'

import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useNavigate } from 'react-router-dom'
import TablePagination from '../../components/TablePagination'

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
]

function ListTeam() {
  const [age, setAge] = React.useState('')
  const navigate = useNavigate()

  const handleChange = (event) => {
    setAge(event.target.value)
  }

  const handleSubmit = () => {
    navigate('/company/teams/new')
  }

  const handleNavigate = (id) => {
    navigate(`/company/team/${id}/users`)
  }

  return (
    <div>
      <Card>
        <Box display='flex'>
          <CardHeader
            title='My Teams'
            style={{ fontFamily: 'Open Sans', fontWeight: 'bold' }}
          />
        </Box>
        <Box>
          <CardContent>
            <Button
              variant='contained'
              sx={{
                backgroundColor: '#7AC29A',
                '&:hover': {
                  backgroundColor: '#68B3C8',
                },
                color: '#FFFFFF',
                padding: '12px 20px',
                borderRadius: '2px',
                fontWeight: 'bold',
                fontSize: '18px',
                textTransform: 'capitalize',
              }}
              onClick={handleSubmit}
            >
              New Team
            </Button>
          </CardContent>
        </Box>

        <CardContent>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <TextField
              id='title'
              name='title'
              sx={{ backgroundColor: '#f5f5f5', borderColor: '#f5f5f5' }}
              placeholder='Search Records'
              margin='dense'
            />
          </Box>
        </CardContent>
        <CardContent>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell align='left'>Title</TableCell>
                  <TableCell align='left'>Team size</TableCell>
                  <TableCell align='left'>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                      cursor: 'pointer',
                    }}
                    onClick={() => handleNavigate('1')}
                  >
                    <TableCell component='th' scope='row'>
                      {row.name}
                    </TableCell>
                    <TableCell align='left'>{row.calories}</TableCell>
                    <TableCell align='left'>{row.fat}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>

        <CardContent>
          <TablePagination handleChange={handleChange} age={age} />
        </CardContent>
      </Card>
    </div>
  )
}

export default ListTeam
