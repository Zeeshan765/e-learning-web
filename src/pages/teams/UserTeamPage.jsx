import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import TeamCardList from '../../components/TeamCardList'
import TeamTable from '../../components/TeamTable'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

function UserTeamPage() {
  const navigate = useNavigate()

  const handleTeamNavigate = () => {
    navigate('/company/my-teams')
  }

  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Grid item xs={11} sm={11} md={10} lg={9} xl={8}>
        <Box
          sx={{
            paddingY: '15px',
          }}
        >
          <Button
            onClick={handleTeamNavigate}
            sx={{
              color: '#68B3C8',
              display: 'flex',
              alignItems: 'center',
            }}
            variant='outlined'
            startIcon={
              <FontAwesomeIcon
                icon={faChevronLeft}
                color='#68B3C8'
                style={{
                  fontSize: '15px',
                }}
              />
            }
          >
            All Teams
          </Button>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: '40px',
            }}
          >
            Bright Starts Perth
          </Typography>
        </Box>
        <TeamCardList />
        <TeamTable />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '20px',
          }}
        >
          <Button
            variant='contained'
            sx={{
              backgroundColor: '#EB5E28',
              '&:hover': {
                backgroundColor: '#EB5E28',
              },
              color: '#FFFFFF',
              paddingY: '10px',
              paddingX: '15px',
              borderRadius: '2px',
              fontWeight: 'bold',
            }}
            // onClick={handleSubmit}
          >
            Delete Team
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default UserTeamPage
