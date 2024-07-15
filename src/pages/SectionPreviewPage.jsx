import React, { createContext } from "react";
import { SectionPreview } from "../sections/AllCourses";
import { useParams } from "react-router-dom";

export const SectionIdContext = createContext();
function SectionPreviewPage() {
  const { sectionId } = useParams();
  return (
    <div>
      <SectionIdContext.Provider value={sectionId}>
        <SectionPreview />
      </SectionIdContext.Provider>
    </div>
  );
}

export default SectionPreviewPage;
