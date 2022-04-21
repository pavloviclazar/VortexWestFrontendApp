import WizardHeader from "./wizard_components/WizardHeader";
import WizardBody from "./wizard_components/WizardBody";
import dummyData from "./dummyData.json";
import { useState } from "react";

function BookWizard() {
  const defaultPageIndex = 0;
  const [pageIndex, setPageIndex] = useState(defaultPageIndex);

  const navigateTo = (page) => () => {
    const pages = [
      "genres",
      "subgenres",
      "addNewSubgenre",
      "information",
      "success",
    ];
    setPageIndex((_) => pages.indexOf(page));
  };

  const pages = [
    "genres",
    "subgenres",
    "addNewSubgenre",
    "information",
    "success",
  ];

  const genres = dummyData["genres"];
  const headerProps = { pageIndex, pages };
  const bodyProps = { genres, pageIndex, pages, navigateTo };

  return (
    <div className="BookWizard">
      <WizardBody {...bodyProps}>
        {pageIndex < 4 ? <WizardHeader {...headerProps}></WizardHeader> : null}
      </WizardBody>
    </div>
  );
}

export default BookWizard;
