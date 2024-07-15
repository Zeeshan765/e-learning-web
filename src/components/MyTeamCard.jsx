import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Card, Grid, Typography } from '@mui/material'
import React from 'react'

function MyTeamCard({ card, onClick }) {
  return (
    <Card
      sx={{
        marginBottom: 2,
        padding: 2,
        backgroundColor: '#FFFFFF',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        border: '1px solid #e0e0e0',
        borderRadius: '5px',
        // make height of card same
      }}
    >
      <Box>
        <Grid container spacing={1}>
          <Grid item xs={5}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
              }}
            >
              <FontAwesomeIcon
                style={{
                  fontSize: '35px',
                }}
                color={card.color}
                icon={card.icon}
              />
            </Box>
          </Grid>
          <Grid item xs={7}>
            <Box
              sx={{
                textAlign: 'right',
              }}
            >
              <Typography>{card.subtitle}</Typography>
              <Typography
                sx={{
                  fontSize: '25px',
                  fontFamily: 'Arial',
                }}
              >
                {card.title}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <hr
        style={{
          marginTop: '15px',
          marginBottom: '15px',
        }}
      />

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <FontAwesomeIcon icon={card.footerIcon} />
        <Typography
          sx={{
            marginLeft: '5px',
          }}
        >
          {card.description}
        </Typography>
      </Box>
    </Card>
  )
}

export default MyTeamCard
