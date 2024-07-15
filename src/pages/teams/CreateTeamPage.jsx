import React from 'react'
import CreateTeam from '../../sections/MyTeams/CreateTeam'
import BreadCumb from '../../components/BreadCrumb'
import { Grid } from '@mui/material'
import { countriesOption, CreateTeamBreadCrumb } from '../../BreadCrumbData'

function CreateTeamPage() {
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
        <BreadCumb BreadCrumbOption={CreateTeamBreadCrumb} />
        <CreateTeam countriesOption={countriesOption} />
      </Grid>
    </Grid>
  )
}

export default CreateTeamPage
