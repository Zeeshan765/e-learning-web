import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Get } from "../../actions/apiActions";
import { API_URLS } from "../../constants/API_URLS";
import AwardCard from "./AwadCard";

function CertificateDetails() {
  const { certificateId } = useParams();
  const [certificate, setCertificate] = useState(null);

  const getCertificate = useCallback(() => {
    try {
      Get(
        {},
        API_URLS.getCertificateById.replace(":certificateId", certificateId),
        (resp) => {
          setCertificate(resp);
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }, [certificateId]);

  useEffect(() => {
    getCertificate();
  }, [getCertificate]);

  if (!certificate) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        marginLeft: "20%",
        marginRight: "20%",
      }}
    >
      <AwardCard data={certificate} />
    </div>
  );
}

export default CertificateDetails;
