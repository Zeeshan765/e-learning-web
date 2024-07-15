import { Box, Button } from '@mui/material'
import React from 'react'

function ProgressButton({ data }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button
        variant='contained'
        sx={{
          backgroundColor: '#7AC29A',
          '&:hover': {
            backgroundColor: '#68B3C8',
          },
          color: '#FFFFFF',
          padding: '12px 30px',
          borderRadius: '2px',
          fontSize: '16px',
          textTransform: 'capitalize',
        }}
      >
        {data}
      </Button>
    </Box>
  )
}

export default ProgressButton
