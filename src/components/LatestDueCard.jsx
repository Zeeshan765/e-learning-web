import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material'
import React from 'react'

function LatestDueCard() {
  const items = [
    { text: 'Allergen Awareness Completed 17/06/24' },
    { text: 'Infection Control (Scotland) Completed 04/02/24' },
    { text: 'Food Safety and Hygiene Level 2 Completed 03/08/23' },
    { text: 'Child Protection Completed 03/08/23' },
    { text: 'Infection Control (Scotland) Completed 07/02/23' },
  ]

  return (
    <Card
      sx={{
        padding: 2,
        backgroundColor: '#FFFFFF',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        border: '1px solid #e0e0e0',
        borderRadius: '5px',
      }}
    >
      <CardHeader
        title={'Latest CPD'}
        sx={{
          fontSize: '20px',
          fontWeight: 'bold',
          fontFamily: 'Arial',
        }}
      />
      <CardContent sx={{ padding: 0 }}>
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              padding: '8px 16px',
              border:'1px solid #e0e0e0',
              borderRadius:'3px'   
            }}
          >
            <Typography
              sx={{
                fontSize: '16px',
                fontFamily: 'Arial',
              }}
            >
              {item.text}
            </Typography>
          </Box>
        ))}
      </CardContent>
    </Card>
  )
}

export default LatestDueCard
