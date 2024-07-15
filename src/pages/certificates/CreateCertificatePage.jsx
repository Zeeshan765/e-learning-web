import React from "react";
import { CreateCertificate } from "../../sections/MyCertificates";
import { Post } from "../../actions/apiActions";
import { API_URLS } from "../../constants/API_URLS";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

function CreateCertificatePage() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmitCertificate = (values, actions) => {
    try {
      Post(
        values,
        API_URLS.addCertificate,
        (resp) => {
          navigate("/dashboard/certificates");
          enqueueSnackbar("Certificate created successfully", {
            variant: "success",
          });
        },
        (error) => {
          enqueueSnackbar("Failed to create certificate", { variant: "error" });
        }
      );
    } catch (error) {
      enqueueSnackbar("Failed to create certificate", { variant: "error" });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginLeft: "20%",
        marginRight: "20%",
      }}
    >
      <CreateCertificate onSubmit={handleSubmitCertificate} />
    </div>
  );
}

export default CreateCertificatePage;
