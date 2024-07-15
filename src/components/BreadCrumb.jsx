import * as React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import { Box } from '@mui/material'

function BreadCumb({ BreadCrumbOption }) {
  return (
    <Box
      role='presentation'
      sx={{
        paddingY: '20px',
      }}
    >
      <Breadcrumbs aria-label='breadcrumb'>
        {BreadCrumbOption.map((item, index) => {
          return (
            <Link
              key={index}
              underline='hover'
              color={item?.color}
              href={item.link}
              style={{
                textDecoration: 'none',
                fontSize: '20px',
              }}
            >
              {item.name}
            </Link>
          )
        })}
      </Breadcrumbs>
    </Box>
  )
}

export default BreadCumb
