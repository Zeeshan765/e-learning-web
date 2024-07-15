import React, { useCallback, useContext, useEffect, useState } from "react";
import { SectionPreviewCard } from "../../components";
import { useSnackbar } from "notistack";
import { API_URLS } from "../../constants/API_URLS";
import { Get } from "../../actions/apiActions";
import { SectionIdContext } from "../../pages/SectionPreviewPage";

function SectionPreview(props) {
  // get the section data from the context
  const sectionId = useContext(SectionIdContext);
  const [section, setSection] = useState({});
  const { enqueueSnackbar } = useSnackbar();

  const getSectionById = useCallback(() => {
    try {
      Get(
        {},
        API_URLS.getSectionById.replace(":sectionId", parseInt(sectionId)),
        (response) => {
          setSection(response);
        },
        (error) => {
          enqueueSnackbar("Failed to fetch section", {
            variant: "error",
          });
        }
      );
    } catch (error) {
      enqueueSnackbar("Failed to fetch section", {
        variant: "error",
      });
    }
  }, [sectionId, enqueueSnackbar]);

  useEffect(() => {
    getSectionById();
  }, [getSectionById]);
  console.log("jsdfdsfdsf", section)
  return (
    <div
      style={{
        display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        // margin from left and right
        marginLeft: "15%",
        marginRight: "15%",
      }}
    >
      <SectionPreviewCard
        title={section?.title}
        description={section?.description}
        image={section?.img_url}
        video_url={section?.video_url}
      />
    </div>
  );
}

export default SectionPreview;
