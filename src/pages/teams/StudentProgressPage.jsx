import React from 'react'
import StudentProgress from '../../sections/MyTeams/StudentProgress'
import { Box, Button, Grid } from '@mui/material'
import BreadCumb from '../../components/BreadCrumb'
import { StudentProgressOption } from '../../BreadCrumbData'

function StudentProgressPage() {
  return (
    <Box
      sx={{
        backgroundColor: '#f4f3ef',
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Grid item xs={11} sm={11} md={10} lg={9} xl={9}>
          <BreadCumb BreadCrumbOption={StudentProgressOption} />
          <Box display='flex' justifyContent='flex-end' mb={4} mt={4}>
            <Button
              variant='outlined'
              sx={{
                textTransform: 'capitalize',
              }}
            >
              make changes to their account
            </Button>
          </Box>
          <StudentProgress />
        </Grid>
      </Grid>
    </Box>
  )
}

export default StudentProgressPage
