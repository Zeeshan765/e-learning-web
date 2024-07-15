import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import React, { useState } from "react";

function CreateCertificate({ onSubmit }) {
  const userId = parseInt(localStorage.getItem("userId"));
  const initialValues = {
    title: "",
    description: "",
    provider: "",
    awarded_date: "",
    update_date: "",
    img_url: [],
    pdf_url: [],
    is_active: "",
    status: "",
  };

  const [showImageUpload, setShowImageUpload] = useState(false);
  const [showPdfUpload, setShowPdfUpload] = useState(false);

  const handleImageChange = (e, setFieldValue, values) => {
    const files = Array.from(e.target.files);
    if (values.img_url.length + files.length <= 3) {
      setFieldValue("img_url", [
        ...values.img_url,
        ...files.map((file) => URL.createObjectURL(file)),
      ]);
    }
  };

  const handlePdfChange = (e, setFieldValue, values) => {
    const files = Array.from(e.target.files);
    if (values.pdf_url.length + files.length <= 3) {
      setFieldValue("pdf_url", [
        ...values.pdf_url,
        ...files.map((file) => URL.createObjectURL(file)),
      ]);
    }
  };

  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={(values,actions) => {
          values.userId = userId;
          onSubmit(values, actions);
        }}
      >
        {({ values, getFieldProps, handleSubmit, setFieldValue }) => (
          <Form>
            <Card>
              <Box display="flex">
                <FontAwesomeIcon
                  icon={faCertificate}
                  style={{
                    color: "#68B3C8",
                    marginTop: "20px",
                    marginLeft: "10px",
                    fontSize: "25px",
                  }}
                />
                <CardHeader
                  title="New Certificate"
                  style={{ fontFamily: "Open Sans" }}
                />
              </Box>
              <CardContent>
                <Box display="flex" flexDirection="column">
                  <label htmlFor="title">Certificate Title</label>
                  <TextField
                    id="title"
                    name="title"
                    sx={{ backgroundColor: "#f5f5f5" }}
                    {...getFieldProps("title")}
                    fullWidth
                    margin="dense"
                  />
                </Box>
                <Box display="flex" flexDirection="column">
                  <label htmlFor="provider">Course Provider</label>
                  <TextField
                    id="provider"
                    name="provider"
                    sx={{ backgroundColor: "#f5f5f5" }}
                    {...getFieldProps("provider")}
                    fullWidth
                    margin="dense"
                  />
                </Box>
                <Box display="flex" flexDirection="column">
                  <label htmlFor="awarded_date">Awarded Date</label>
                  <TextField
                    id="awarded_date"
                    name="awarded_date"
                    type="date"
                    sx={{ backgroundColor: "#f5f5f5" }}
                    {...getFieldProps("awarded_date")}
                    fullWidth
                    margin="dense"
                  />
                </Box>
                <Box display="flex" flexDirection="column">
                  <label htmlFor="update_date">Update Date</label>
                  <TextField
                    id="update_date"
                    name="update_date"
                    type="date"
                    sx={{ backgroundColor: "#f5f5f5" }}
                    {...getFieldProps("update_date")}
                    fullWidth
                    margin="dense"
                  />
                </Box>
                <Box display="flex" flexDirection="column">
                  <label htmlFor="description">Course Description</label>
                  <TextField
                    id="description"
                    name="description"
                    sx={{ backgroundColor: "#f5f5f5" }}
                    {...getFieldProps("description")}
                    fullWidth
                    margin="dense"
                  />
                </Box>
                <Box display="flex" flexDirection="column">
                  <label htmlFor="img_url">Image URL</label>
                  {showImageUpload && (
                    <Box>
                      {values.img_url.map((img, index) => (
                        <Card
                          key={index}
                          sx={{
                            backgroundColor: "#E8F4FD",
                            padding: "10px",
                            marginBottom: "10px",
                          }}
                        >
                          <Typography>Image {index + 1}</Typography>
                          <img
                            src={img}
                            alt={`certificate ${index + 1}`}
                            style={{ width: "20%" }}
                          />
                        </Card>
                      ))}
                      {values.img_url.length < 3 && (
                        <Card
                          sx={{
                            backgroundColor: "#E8F4FD",
                            padding: "10px",
                            marginBottom: "10px",
                          }}
                        >
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                              handleImageChange(e, setFieldValue, values)
                            }
                          />
                        </Card>
                      )}
                    </Box>
                  )}
                  {!showImageUpload && (
                    <Card
                      sx={{
                        backgroundColor: "#E8F4FD",
                        padding: "10px",
                        marginBottom: "10px",
                      }}
                    >
                      <Button
                        onClick={() => setShowImageUpload(true)}
                        sx={{ color: "#68B3C8" }}
                      >
                        Add an Image
                      </Button>
                    </Card>
                  )}
                </Box>
                <Box display="flex" flexDirection="column">
                  <label htmlFor="pdf_url">PDF URL</label>
                  {showPdfUpload && (
                    <Box>
                      {values.pdf_url.map((pdf, index) => (
                        <Card
                          key={index}
                          sx={{
                            backgroundColor: "#E8F4FD",
                            padding: "10px",
                            marginBottom: "10px",
                          }}
                        >
                          <Typography>PDF {index + 1}</Typography>
                          <embed
                            src={pdf}
                            type="application/pdf"
                            width="100%"
                            height="200px"
                          />
                        </Card>
                      ))}
                      {values.pdf_url.length < 3 && (
                        <Card
                          sx={{
                            backgroundColor: "#E8F4FD",
                            padding: "10px",
                            marginBottom: "10px",
                          }}
                        >
                          <input
                            type="file"
                            accept="application/pdf"
                            onChange={(e) =>
                              handlePdfChange(e, setFieldValue, values)
                            }
                          />
                        </Card>
                      )}
                    </Box>
                  )}
                  {!showPdfUpload && (
                    <Card
                      sx={{
                        backgroundColor: "#E8F4FD",
                        padding: "10px",
                        marginBottom: "10px",
                      }}
                    >
                      <Button
                        onClick={() => setShowPdfUpload(true)}
                        sx={{ color: "#68B3C8" }}
                      >
                        Add a PDF
                      </Button>
                    </Card>
                  )}
                </Box>
              </CardContent>
              <CardContent>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#7AC29A",
                    "&:hover": {
                      backgroundColor: "#68B3C8",
                    },
                    color: "#FFFFFF",
                    width: "200px",
                    borderRadius: "2px",
                  }}
                  onClick={handleSubmit}
                >
                  Save Certificate
                </Button>
              </CardContent>
            </Card>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CreateCertificate;
