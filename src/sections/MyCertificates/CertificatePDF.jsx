import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Dialog, DialogContent } from "@mui/material";

const Certificate = React.forwardRef(({ name, course, date }, ref) => (
  <div ref={ref} style={styles.certificateContainer}>
    <h1 style={styles.title}>Certificate of Completion</h1>
    <p style={styles.text}>This is to certify that</p>
    <h2 style={styles.name}>{name}</h2>
    <p style={styles.text}>has successfully completed the course</p>
    <h2 style={styles.course}>{course}</h2>
    <p style={styles.text}>on</p>
    <h2 style={styles.date}>{date}</h2>
  </div>
));

const styles = {
  certificateContainer: {
    width: "800px",
    height: "600px",
    border: "2px solid black",
    padding: "50px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    margin: "0 auto",
    backgroundColor: "white", // Ensure a white background for the PDF
  },
  title: {
    fontSize: "36px",
    marginBottom: "40px",
  },
  text: {
    fontSize: "24px",
  },
  name: {
    fontSize: "28px",
    fontWeight: "bold",
    margin: "20px 0",
  },
  course: {
    fontSize: "28px",
    fontWeight: "bold",
    margin: "20px 0",
  },
  date: {
    fontSize: "28px",
    fontWeight: "bold",
    margin: "20px 0",
  },
};

const CertificateContainer = ({ open, onClose, name, course, date }) => {
  const componentRef = useRef();

  const handleDownloadPDF = async () => {
    const canvas = await html2canvas(componentRef.current);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [canvas.width, canvas.height],
    });
    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save("certificate.pdf");
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth>
      <DialogContent>
        <Certificate
          ref={componentRef}
          name={name}
          course={course}
          date={date}
        />
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <button onClick={handleDownloadPDF}>Download as PDF</button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CertificateContainer;
