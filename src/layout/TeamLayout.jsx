import React from 'react'
import { CssBaseline } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import Layout from './team/Header'
import Nav from './team/Nav'
import Footer from './team/Footer'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  content: {
    flexGrow: 1,
    paddingTop: 10,
    marginLeft: '60px',
    height:'100vh',
    backgroundColor:"#f4f3ef"
  },
}))

const TeamLayout = () => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.root}>
        <CssBaseline />
        <Layout />
        <Nav />
      </div>
      <main className={classes.content}>
        <Outlet /> {/* Render child routes here */}
      </main>
      <Footer/>
    </div>
  )
}

export default TeamLayout
