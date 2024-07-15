import { Card, CardContent, Typography, Grid, Button, Box } from "@mui/material";
import { styled } from "@mui/system";
// import jsPDF from "jspdf";
import CertificateContainer from "./CertificatePDF";
import { useState } from "react";

const CenteredCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  width: "100%",
});

const Row = styled(Grid)({
  width: "75%",
  marginBottom: "8px",
});

const KeyTypography = styled(Typography)({
  color: "#F8CA45",
  fontWeight: "bold",
  textAlign: "right",
});

const ValueTypography = styled(Typography)({
  textAlign: "left",
  wordBreak: "break-word",
});

const AwardCard = ({ data }) => {
  const { title, provider, awarded_date, update_date, description } = data;
  const [openCertificate, setOpenCertificate] = useState(false);
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };


  // only Print this card
//   const handleDownloadCertificate = (data) => {
//     const { title, provider, awarded_date, update_date, description } = data;
//     const doc = new jsPDF();
    
//     // Define a formatDate function
//     const formatDate = (dateString) => {
//       const options = { year: 'numeric', month: 'long', day: 'numeric' };
//       return new Date(dateString).toLocaleDateString(undefined, options);
//     };
    
//     // Set font for the title
//     doc.setFont("helvetica", "bold");
//     doc.setFontSize(20);
//     doc.text(20, 20, title);
    
//     // Set font for the rest of the text
//     doc.setFont("helvetica", "normal");
//     doc.setFontSize(14);
//     doc.text(20, 30, `Provider: ${provider}`);
//     doc.text(20, 40, `Awarded: ${formatDate(awarded_date)}`);
//     doc.text(20, 50, `Expires: ${formatDate(update_date)}`);
//     doc.text(20, 60, `Description: ${description}`);
    
//     doc.save(`${title}.pdf`);
//   };

  return (
    <Card>
      <CenteredCardContent>
        <Row container spacing={2}>
          <Grid item xs={4}>
            <KeyTypography variant="body1">Title:</KeyTypography>
          </Grid>
          <Grid item xs={8}>
            <ValueTypography variant="body1">{title}</ValueTypography>
          </Grid>
        </Row>
        <Row container spacing={2}>
          <Grid item xs={4}>
            <KeyTypography variant="body1">Provider:</KeyTypography>
          </Grid>
          <Grid item xs={8}>
            <ValueTypography variant="body1">{provider}</ValueTypography>
          </Grid>
        </Row>
        <Row container spacing={2}>
          <Grid item xs={4}>
            <KeyTypography variant="body1">Awarded:</KeyTypography>
          </Grid>
          <Grid item xs={8}>
            <ValueTypography variant="body1">
              Awarded {formatDate(awarded_date)}
            </ValueTypography>
          </Grid>
        </Row>
        <Row container spacing={2}>
          <Grid item xs={4}>
            <KeyTypography variant="body1">Expires:</KeyTypography>
          </Grid>
          <Grid item xs={8}>
            <ValueTypography variant="body1">
              Expires {formatDate(update_date)}
            </ValueTypography>
          </Grid>
        </Row>
        <Row container spacing={2}>
          <Grid item xs={4}>
            <KeyTypography variant="body1">Description:</KeyTypography>
          </Grid>
          <Grid item xs={8}>
            <ValueTypography variant="body1">{description}</ValueTypography>
          </Grid>
        </Row>
      </CenteredCardContent>
      <hr />
      <Box display="flex" justifyContent="flex-end" alignItems="center">
        <Button
          style={{
            backgroundColor: "#68B3C8",
            color: "#FFFFFF",
            borderRadius: "10px",
            padding: "10px",
            margin: "10px",
            width: "auto",
            height: "50px",
          }}
          onClick={() => setOpenCertificate(true)}
        >
          Download Certificate (PDF)
        </Button>
      </Box>
      <CertificateContainer
        open={openCertificate}
        name={title}
        course={provider}
        date={formatDate(awarded_date)}
        onClose={() => setOpenCertificate(false)}
        data={data}
      />
    </Card>
  );
};

export default AwardCard;
