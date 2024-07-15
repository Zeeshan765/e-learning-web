import React from 'react';
import {  Grid, Typography, Link } from '@mui/material';
import { styled } from '@mui/system';
const FooterSection = styled('footer')({
  backgroundColor: '#FFFFF',
});
const CopyrightArea = styled('div')({
  backgroundColor: '#FFFFF',
  padding: '25px 0',
});
const CopyrightText = styled(Typography)({
  margin: 0,
  fontSize: '14px',
  color: '#878787',
  '& a': {
    color: '#FF5E14',
  },
  textAlign: 'right'
});
const Footer = () => {
  return (
    <FooterSection className="footer-section">

      <Grid container padding={3}>
        <Grid item xs={12} lg={12}>
          <CopyrightArea className="copyright-area">
            <CopyrightText className="copyright-text" variant="body2">
              Want to say hi? &nbsp;
              <Link href="" color="inherit">
                Contact Us  &nbsp;
              </Link>
              | © 2020, made with  by  &nbsp;
              <Link href="" color="inherit">
                Azilo
              </Link>
            </CopyrightText>
          </CopyrightArea>
        </Grid>
      </Grid>
    </FooterSection>
  );
};
export default Footer;