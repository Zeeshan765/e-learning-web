import React from 'react'
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from '@mui/material'
import { Done } from '@mui/icons-material'
// improt fontawesome icon
import '@fortawesome/fontawesome-free'
import CpdDueCard from '../../components/CpdDueCard'
import LatestDueCard from '../../components/LatestDueCard'
import ProgressButton from '../../components/ProgressButton'
const buttonData = ['View Their Certificates', 'View Their CPD']

function StudentProgress() {
  return (
    <>
      <Card
        sx={{
          padding: 2,
          backgroundColor: '#FFFFFF',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e0e0e0',
          borderRadius: '5px',
        }}
      >
        <CardContent>
          <Grid container spacing={2} margin='20px'>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <Typography
                sx={{
                  textAlign: {
                    xs: 'center',
                    md: 'left',
                  },
                }}
                variant='h6'
              >
                Their Status...
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <Typography
                variant='h6'
                sx={{
                  color: 'green',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <Done style={{ color: 'green', fontSize: '30px' }} /> &nbsp; All
                Good
              </Typography>
            </Grid>
          </Grid>
          <Divider />

          <Grid container spacing={2} margin='20px'>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <Typography
                sx={{
                  textAlign: {
                    xs: 'center',
                    md: 'left',
                  },
                }}
                variant='h6'
              >
                So far you've done...
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <Typography color='#68B8D4' textAlign='center'>
                00 Mins <br /> of CPD in the last 7 Days
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <Typography color='#68B8D4' textAlign='center'>
                20 Mins <br /> of CPD in the last 30 Days
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <Typography color='#68B8D4' textAlign='center'>
                40 Mins <br /> of CPD since the beginning
              </Typography>
            </Grid>
          </Grid>

          <Divider />

          <Grid container spacing={2} margin='20px'>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <Typography
                sx={{
                  textAlign: {
                    xs: 'center',
                    md: 'left',
                  },
                }}
                variant='h6'
              >
                And you've got...
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <Typography textAlign='center' marginRight='30px' color='#7AC29A'>
                2 <br /> Current Certificates
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <Typography textAlign='center' marginRight='30px' color='#EB5E28'>
                0 <br /> Expired Certificates
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <Typography textAlign='center' marginRight='30px'>
                <span style={{ color: '#000000' }}>
                  They haven't given us their SSSC{' '}
                </span>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Button Section */}

      <Grid
        container
        spacing={2}
        sx={{
          paddingY: '30px',
        }}
      >
        {buttonData.map((data) => (
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <ProgressButton key={data} data={data} />
          </Grid>
        ))}
      </Grid>

      {/* card code */}

      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <CpdDueCard />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <LatestDueCard />
        </Grid>
      </Grid>

      <Divider
        sx={{
          opacity: 0.5,
          marginY: '14px',
          color: '#EB5E28',
        }}
      />

      <Box display='flex' justifyContent='flex-end' mb={4} mt={4}>
        <Button
          sx={{
            backgroundColor: '#EB5E28',
            color: 'white',
            padding: '15px 25px',
            borderRadius: '1px',
            border: 'none',
            cursor: 'pointer',
            marginTop: '10px',
            height: '50px',
            fontSize: '18px',
            textTransform: 'capitalize',
            '&:hover': {
              backgroundColor: '#EB5E28',
            },
          }}
        >
          Remove Team Member
        </Button>
      </Box>
    </>
  )
}

export default StudentProgress
