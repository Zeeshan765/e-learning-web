import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Typography,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { faCertificate, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { certificates } from "../../constants/CardData";
import { useNavigate } from "react-router-dom";
import { Get } from "../../actions/apiActions";
import { API_URLS } from "../../constants/API_URLS";
function MyCertificates() {
  const navigate = useNavigate();
  const [certificates, setCertificates] = useState([]);
  const userId = parseInt(localStorage.getItem("userId"));
  const [loadingCertificates, setLoadingCertificates] = useState(false);

  const getCertificates = useCallback(() => {
    try {
      setLoadingCertificates(true);
      Get(
        {},
        API_URLS.getUserCertificates.replace(":userId", userId),
        (resp) => {
          setCertificates(resp);
          setLoadingCertificates(false);
        },
        (error) => {
          setLoadingCertificates(false);
        }
      );
    } catch (error) {
      setLoadingCertificates(false);
    }
  }, [userId]);

  useEffect(() => {
    getCertificates();
  }, [getCertificates]);

  return (
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
        <CardHeader title="My Certificate" style={{ fontFamily: "fantasy" }} />
      </Box>
      <CardContent>
        <Box display="flex" justifyContent="flex-start">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#7AC29A",
              color: "white",
              padding: "5px 10px",
              borderRadius: "1px",
              border: "none",
              cursor: "pointer",
              height: "40px",
              marginTop: "10px",
              marginRight: "10px",
              fontSize: "15px",
              fontWeight: "bold",
              ":hover": {
                backgroundColor: "#50af7b",
              },
            }}
            onClick={() => navigate("/dashboard/certificates/new")}
          >
            Add New Certificate
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#66615B",
              color: "white",
              padding: "5px 10px",
              borderRadius: "1px",
              height: "40px",
              border: "none",
              cursor: "pointer",
              marginTop: "10px",
              fontSize: "15px",
              fontWeight: "bold",
              ":hover": {
                backgroundColor: "#44403c",
              },
            }}
          >
            View Archive
          </Button>
        </Box>
        {loadingCertificates ? (
          <CircularProgress />
        ) : (
          <>
            {certificates.map((certificate) => (
              <Box
                key={certificate.id}
                display="flex"
                sx={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "10px",
                  padding: "10px",
                  margin: "10px",
                }}
              >
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{
                    color: "#68B3C8",
                    marginTop: "5px",
                    marginRight: "25px",
                    marginLeft: "10px",
                    fontSize: "25px",
                  }}
                />
                <Typography
                  variant="h5"
                  style={{
                    fontFamily: "revert",
                    color: "#68B3C8",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    navigate(`/dashboard/certificates/${certificate.id}`)
                  }
                >
                  {certificate.title}
                </Typography>
                <Typography
                  variant="h6"
                  style={{
                    fontFamily: "revert",
                    color: "#9A9A9A",
                    marginLeft: 10,
                  }}
                >
                  {certificate.update_date
                    ? certificate.update_date.split("T")[0]
                    : "No Expiry Date"}
                </Typography>
              </Box>
            ))}
          </>
        )}
      </CardContent>
    </Card>
  );
}

export default MyCertificates;
