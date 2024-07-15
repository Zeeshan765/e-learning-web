import { Grid } from '@mui/material'
import MyTeamCard from './MyTeamCard'
import {
  faClipboard,
  faRotate,
  faCalendar,
  faClock,
  faWaveSquare
} from '@fortawesome/free-solid-svg-icons'

function TeamCardList() {
  const cardData = [
    {
      id: 1,
      icon: faClock,
      title: '30 hrs 50 mins',
      subtitle: 'CPD',
      description: 'last 30 days',
      footerIcon: faCalendar,
      color:'#7AC29A'
    },
    {
      id: 1,
      icon: faClipboard,
      title: '55',
      subtitle: 'Certificates',
      description: 'last 30 days',
      footerIcon: faCalendar,
      color:'#EB5E28'
    },
    {
      id: 1,
      icon: faWaveSquare,
      title: '55',
      subtitle: 'Team Status',
      description: 'Updated few seconds ago',
      footerIcon: faRotate,
      color:'#68B3C8'
    },
  ]
  const handleCardClick = (title) => {}
  return (
    <Grid container spacing={1}>
      {cardData.map((card, index) => (
        <Grid item key={index} xs={12} sm={12} md={6} lg={4} xl={4}>
          <MyTeamCard card={card} onClick={(title) => handleCardClick(title)} />
        </Grid>
      ))}
    </Grid>
  )
}

export default TeamCardList
