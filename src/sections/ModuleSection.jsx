import { Grid } from '@mui/material'
import React from 'react'
import { ModuleCard } from '../components'
import { useNavigate } from 'react-router-dom'

function ModuleSection({ cardData }) {
  const navigate = useNavigate()
  const handleView = (title) => {
    switch (title) {
      case 'My Learning':
        navigate('/dashboard/my-learning', { replace: true })
        break

      case 'My Teams':
        navigate('/company/my-teams', { replace: true })
        break

      default:
        break
    }
  }
  return (
    <div
      style={{
        padding: '20px',
        margin: '20px',
      }}
    >
      <Grid container spacing={2}>
        {cardData.map((card, index) => (
          <Grid item key={index} xs={12} sm={12} md={6} lg={4} xl={3}>
            <ModuleCard card={card} onClick={(title) => handleView(title)} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default ModuleSection
