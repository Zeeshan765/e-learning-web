import React from 'react'
import InviteStaff from '../../sections/MyTeams/InviteStaff'
import BreadCumb from '../../components/BreadCrumb'
import { Grid } from '@mui/material'
import { StaffBreadCrumb } from '../../BreadCrumbData'

function InviteStaffPage() {
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
        <BreadCumb BreadCrumbOption={StaffBreadCrumb} />
        <InviteStaff />
      </Grid>
    </Grid>
  )
}

export default InviteStaffPage
