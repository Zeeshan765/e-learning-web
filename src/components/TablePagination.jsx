import React from 'react'
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from '@mui/material'

function TablePagination({ handleChange, age }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography>Result Per Page</Typography>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <Select
            sx={{
              height: '40px',
            }}
            value={age}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>25</MenuItem>
            <MenuItem value={30}>50</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Typography>Showing 1 to 2 of 2 entries</Typography>
      <Box>
        <Button
          sx={{
            mr: 1,
            height: '35px',
            borderRadius: '50px',
          }}
          variant='contained'
        >
          Previous
        </Button>

        <Button
          sx={{
            mr: 1,
            height: '35px',
            borderRadius: '50px',
          }}
          variant='contained'
        >
          Next
        </Button>
      </Box>
    </Box>
  )
}

export default TablePagination
