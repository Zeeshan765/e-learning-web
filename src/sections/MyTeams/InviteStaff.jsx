import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
  Typography,
} from '@mui/material'

import React from 'react'

function InviteStaff() {
  return (
    <div>
      <Card>
        <Box display='flex'>
          <FontAwesomeIcon
            icon={faUsers}
            style={{
              color: '#68B3C8',
              marginTop: '20px',
              marginLeft: '10px',
              fontSize: '25px',
            }}
          />
          <CardHeader
            title='Invite New Staff'
            style={{ fontFamily: 'Open Sans', fontWeight: 'bold' }}
          />
        </Box>
        <CardContent>
          <Grid
            container
            spacing={2}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
              <Box>
                <TextField
                  id='email'
                  name='email'
                  placeholder='Put Emails Here !'
                  sx={{ backgroundColor: '#f5f5f5' }}
                  fullWidth
                  margin='dense'
                />
                <Typography
                  sx={{
                    fontStyle: 'italic',
                  }}
                >
                  You can Copy in as many emails as you like
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
        <CardContent>
          <Grid
            container
            spacing={2}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Grid item xs={8}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'end',
                }}
              >
                <Button
                  variant='contained'
                  sx={{
                    backgroundColor: '#68B3CB',
                    '&:hover': {
                      backgroundColor: '#7AC29A',
                    },
                    color: '#FFFFFF',
                    paddingY: '15px',
                    paddingX: '40px',
                    borderRadius: '2px',
                    fontWeight: 'bold',
                  }}
                  // onClick={handleSubmit}
                >
                  Invite
                </Button>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  )
}

export default InviteStaff
