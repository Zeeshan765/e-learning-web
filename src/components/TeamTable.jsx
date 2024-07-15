import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
]

const TableHeader = [
  'Name',
  'CPD last 30 days',
  'Certificates last 30 days',
  'SSSC',
  'Status',
]

function TeamTable() {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/company/teams/staff/new')
  }

  const handleProgress = (id) => {
    navigate(`/company/team/${id}/users/${id}`)
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <Typography
              sx={{
                padding: '20px',
                fontSize: '24px',
                fontFamily: 'Arial',
                color: '#252422',
              }}
            >
              My Team
            </Typography>
            <TableRow>
              {TableHeader.map((row) => (
                <TableCell
                  sx={{
                    fontSize: '18px',
                    fontFamily: 'Arial',
                    color: '#252422',
                  }}
                  key={row}
                  component='th'
                  scope='row'
                >
                  {row}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  fontSize: '24px',
                  fontFamily: 'Arial',
                  cursor: 'pointer',
                }}
                onClick={() => handleProgress('1')}
              >
                <TableCell component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell>{row.calories}</TableCell>
                <TableCell>{row.fat}</TableCell>
                <TableCell>{row.carbs}</TableCell>
                <TableCell>{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <Button
            variant='contained'
            sx={{
              backgroundColor: '#7AC29A',
              '&:hover': {
                backgroundColor: '#68B3C8',
              },
              cursor: 'pointer',
              color: '#FFFFFF',
              paddingY: '10px',
              paddingX: '15px',
              borderRadius: '2px',
              fontWeight: 'bold',
            }}
            onClick={handleNavigate}
          >
            Invite Team Member
          </Button>
        </Box>
      </TableContainer>
    </>
  )
}

export default TeamTable
