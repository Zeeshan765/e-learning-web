import React from 'react'
import { Grid } from '@mui/material'
import ListTeam from '../../sections/MyTeams/ListTeam'
import BreadCumb from '../../components/BreadCrumb'
import { MyTeamOption } from '../../BreadCrumbData'

function TeamListingPage() {
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
        <BreadCumb BreadCrumbOption={MyTeamOption} />
        <ListTeam />
      </Grid>
    </Grid>
  )
}

export default TeamListingPage
