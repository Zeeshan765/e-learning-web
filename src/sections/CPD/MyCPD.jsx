import { faHistory } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  Button,
  Card,
  CardContent,
  Select,
  Typography,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { Get } from "../../actions/apiActions";
import { API_URLS } from "../../constants/API_URLS";
import * as XLSX from "xlsx";

const CPDs = ["7 Days", "30 Days", "90 Days", "Year", "3 Years", "Forever"];

function MyCPD() {
  const [selectedCPD, setSelectedCPD] = useState(CPDs[0]);
  const [CPD, setCPD] = useState({});

  const getCpdTime = useCallback(() => {
    try {
      Get(
        {},
        API_URLS.getCpdHours,
        (response) => {
          setCPD(response);
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getCpdTime();
  }, [getCpdTime]);

  const handleDownloadExcel = () => {
    // Prepare data for export
    const data = Object.keys(CPD)
      .filter((key) => key === selectedCPD)
      .map((key) => ({
        Date: key,
        Duration: CPD[key] <= 60 ? `${CPD[key]} mins` : `${CPD[key] / 60} hrs`,
        CPDMinutes: CPD[key],
      }));

    // Convert data to Excel format
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "CPD Report");

    // Generate download
    XLSX.writeFile(wb, "cpd_report.xlsx");
  };

  return (
    <Card>
      <Box display="flex" p={4}>
        <FontAwesomeIcon icon={faHistory} size="large" color="#95CAD8" />
        &nbsp;&nbsp;
        <Typography>My CPD</Typography>
      </Box>
      <CardContent>
        <Typography>
          In the last &nbsp;
          <Select
            native
            defaultValue={7}
            sx={{ background: "#62AFC5" }}
            size="small"
            onChange={(e) => setSelectedCPD(e.target.value)}
          >
            {CPDs.map((cpd) => (
              <option
                key={cpd}
                value={cpd}
                style={{
                  "&:hover": {
                    background: "#95CAD8",
                  },
                  padding: 1,
                }}
              >
                {cpd}
              </option>
            ))}
          </Select>
          &nbsp; you have completed &nbsp;{" "}
          <span
            style={{
              color: "#62AFC5",
            }}
          >
            {CPD[selectedCPD] <= 60
              ? CPD[selectedCPD] + " mins"
              : CPD[selectedCPD] / 60 + " hrs"}
          </span>{" "}
          &nbsp; of CPD
        </Typography>
        <Button
          onClick={handleDownloadExcel}
          variant="contained"
          color="primary"
          style={{ marginTop: "10px" }}
        >
          Download CPD as Excel
        </Button>
      </CardContent>
    </Card>
  );
}

export default MyCPD;
