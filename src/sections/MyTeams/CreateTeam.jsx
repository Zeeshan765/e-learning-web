import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  TextField,
} from '@mui/material'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import React, { useState } from 'react'
import { Post } from '../../actions/apiActions'
import { API_URLS } from '../../constants/API_URLS'
import { enqueueSnackbar } from 'notistack'
import { useNavigate } from 'react-router-dom'

function CreateTeam({ countriesOption }) {
  const [value, setValue] = useState('')
  const [title, setTitle] = useState('')

  const navigate = useNavigate()

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  // Handle Submit form submission
  const handleSubmit = () => {
    let values = { name: title, country: value }
    try {
      Post(
        values,
        API_URLS.createTeam,
        (resp) => {
          enqueueSnackbar('Team Created Successfully', { variant: 'success' })
          localStorage.setItem('userId', resp.userId)
          navigate('/company/my-teams')
        },
        (error) => {
          enqueueSnackbar('Unable to Create Team', { variant: 'error' })
        }
      )
    } catch (error) {
      enqueueSnackbar('Something went wrong', { variant: 'error' })
    }
  }

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
            title='New Team'
            style={{ fontFamily: 'Open Sans', fontWeight: 'bold' }}
          />
        </Box>
        <CardContent>
          <Box display='flex' flexDirection='column'>
            <label htmlFor='title'>Title</label>
            <TextField
              id='title'
              name='title'
              onChange={(e) => setTitle(e.target.value)}
              sx={{ backgroundColor: '#f5f5f5' }}
              fullWidth
              margin='dense'
            />
          </Box>
          <Box mt={1} display='flex' flexDirection='column'>
            <label htmlFor='title'>Country</label>
            <FormControl>
              <RadioGroup
                aria-labelledby='demo-controlled-radio-buttons-group'
                name='controlled-radio-buttons-group'
                value={value}
                onChange={handleChange}
              >
                {countriesOption.map((country, index) => (
                  <FormControlLabel
                    key={index}
                    value={country.value}
                    control={<Radio />}
                    label={country.label}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Box>
        </CardContent>
        <CardContent>
          <Button
            variant='contained'
            sx={{
              backgroundColor: '#7AC29A',
              '&:hover': {
                backgroundColor: '#68B3C8',
              },
              color: '#FFFFFF',
              padding: '12px',
              borderRadius: '2px',
              fontWeight: 'bold',
            }}
            onClick={handleSubmit}
          >
            Create Team
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default CreateTeam
