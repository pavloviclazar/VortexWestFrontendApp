import GenrePicker from "./body_components/GenrePicker/GenrePicker";
import SubgenrePicker from "./body_components/SubgenrePicker/SubgenrePicker";
import AddNewSubgenre from "./body_components/AddNewSubgenre/AddNewSubgenre";
import AddInformation from "./body_components/AddInformation/AddInformation";
import Success from "./body_components/Success/Success";
import { useState } from "react";

const defaultData = {
  genre: { id: null, name: "" },
  subgenre: { id: null, name: "", isDescriptionRequired: false },
  bookTitle: "",
  author: "",
  isbn: "",
  publisher: "",
  datePublished: "",
  numberOfPages: "",
  format: "",
  edition: "",
  editionLanguage: "",
  description: "",
};

function WizardBody(props) {
  const { children, pageIndex, pages, genres, navigateTo } = props;
  const [formData, setForm] = useState(defaultData);

  const editFormField = (fieldName, value) => () => {
    setForm((previousState) => {
      return {
        ...previousState,
        [fieldName]: value,
      };
    });
  };

  const resetFormFields = () => {
    setForm((_) => defaultData);
  };

  const pageProps = {
    formData,
    genres,
    editFormField,
    navigateTo,
    resetFormFields,
  };

  switch (pages[pageIndex]) {
    case "genres":
      return <GenrePicker {...pageProps}> {children}</GenrePicker>;
    case "subgenres":
      return <SubgenrePicker {...pageProps}> {children}</SubgenrePicker>;
    case "addNewSubgenre":
      return <AddNewSubgenre {...pageProps}> {children}</AddNewSubgenre>;
    case "information":
      return <AddInformation {...pageProps}> {children}</AddInformation>;
    case "success":
      return <Success {...pageProps} />;
    default:
      return null;
  }
}

export default WizardBody;
