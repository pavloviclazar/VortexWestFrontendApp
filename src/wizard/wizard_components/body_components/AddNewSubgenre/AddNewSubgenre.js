import { useState } from "react";
import style from "./AddNewSubgenre.module.css";
import { Children } from "react";

function AddNewSubgenre(props) {
  const { children, editFormField, formData, navigateTo } = props;

  const [descriptionRequired, setDescriptionRequired] = useState(false);
  const [subgenreName, setSubgenreName] = useState("");

  const handleSubgenreChange = (event) => {
    setSubgenreName((_) => event.target.value);

    editFormField("subgenre", {
      id: null,
      name: event.target.value,
      isDescriptionRequired: descriptionRequired,
    })();
  };
  const handleDescriptionRequiredChange = (event) => {
    setDescriptionRequired((_) => event.target.checked);

    editFormField("subgenre", {
      id: null,
      name: subgenreName,
      isDescriptionRequired: event.target.checked,
    })();
  };

  return (
    <div className={style["SubgenreNameWindow"]}>
      <h5 className={style["add-new-subgenre-name-title"]}>
        Add Book - new Book
      </h5>
      <div className={style["WizardHeader"]}>{children}</div>
      <div className={style["subgenre-div"]}>
        <input
          className={style["subgenre-input-div"]}
          type="text"
          placeholder="Subgenre name"
          defaultValue={formData["subgenre"]["name"]}
          onChange={handleSubgenreChange}
        />
      </div>
      <div className={style["CheckBox"]}>
        <input
          type="checkbox"
          name="isDescriptionRequired"
          onChange={handleDescriptionRequiredChange}
        />
        <label htmlFor="isDescriptionRequired">
          Description is required for this subgenre
        </label>
      </div>

      <button
        className={style["button-back"]}
        onClick={navigateTo("subgenres")}
      >
        Back
      </button>
      <button
        className={style["button-forward"]}
        onClick={navigateTo("information")}
      >
        Next
      </button>
    </div>
  );
}

export default AddNewSubgenre;
