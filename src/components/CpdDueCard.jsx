import { Box, Card, CardHeader, Typography } from '@mui/material'
import React from 'react'

function CpdDueCard() {
  return (
    <Card
      sx={{
        padding: 2,
        backgroundColor: '#FFFFFF',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        border: '1px solid #e0e0e0',
        borderRadius: '5px',
        // make height of card same
      }}
    >
      <Box>
        <CardHeader
          title={'CPD Due'}
          sx={{
            fontSize: '20px',
            fontWeight: 'bold',
            fontFamily: 'Arial',
          }}
        />
      </Box>
     
        <Box sx={{
          paddingX:'13px'
        }}>
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: 'bold',
              fontFamily: 'Arial',
              
            }}
            variant='body2'
          >
            They don't have any CPD due
          </Typography>
        </Box>
    </Card>
  )
}

export default CpdDueCard
