import style from "./AddInformation.module.css";
import link from "../../../../../src/link.png";
import underline from "../../../../../src/underline.png";
import arroba from "../../../../../src/arroba.png";
import arrowback from "../../../../../src/left-arrow.png";
import { Children } from "react";

function AddInformation(props) {
  const { children, editFormField, formData, navigateTo } = props;

  const handleValueChanged = (event) => {
    editFormField(event.target.getAttribute("name"), event.target.value)();
  };

  const submitFormAndNavigateToSuccess = () => {
    fetch("http://localhost:3000/", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((_) => {
      let data = JSON.stringify(formData);
      console.log(data);
      navigateTo("success")();
    });
  };

  return (
    <div className={style["AddInformationWindow"]}>
      <h5 className={style["add-information-title"]}>Add Book - new Book</h5>
      <div className={style["WizardHeader"]}>{children}</div>
      <div className={style["book-title-div"]}>
        <label className={style["book-title-lable-div"]} htmlFor="bookTitle">
          Book title:
        </label>
        <input
          className={style["book-title-input-div"]}
          type="text"
          name="bookTitle"
          placeholder="Book title"
          defaultValue={formData["bookTitle"]}
          onChange={handleValueChanged}
        />
      </div>
      <div className={style["author-div"]}>
        <label className={style["author-lable-div"]} htmlFor="author">
          Author:
        </label>
        <input
          className={style["author-input-div"]}
          type="text"
          name="author"
          placeholder="Author"
          defaultValue={formData["author"]}
          onChange={handleValueChanged}
        />
      </div>
      <div className={style["isbn-div"]}>
        <label className={style["isbn-lable-div"]} htmlFor="isbn">
          ISBN:
        </label>
        <input
          className={style["isbn-input-div"]}
          type="text"
          name="isbn"
          placeholder="ISBN"
          defaultValue={formData["isbn"]}
          onChange={handleValueChanged}
        />
      </div>
      <div className={style["publisher-div"]}>
        <label className={style["publisher-lable-div"]} htmlFor="publisher">
          Publisher:
        </label>
        <input
          className={style["publisher-input-div"]}
          type="text"
          name="publisher"
          placeholder="Publisher"
          defaultValue={formData["publisher"]}
          onChange={handleValueChanged}
        />
      </div>
      <div className={style["date-publishered-div"]}>
        <label
          className={style["date-publishered-lable-div"]}
          htmlFor="datePublished"
        >
          Date published:
        </label>
        <input
          className={style["date-publishered-input-div"]}
          type="text"
          name="datePublished"
          placeholder="DD/MM/YYYY"
          defaultValue={formData["datePublished"]}
          onChange={handleValueChanged}
        />
      </div>
      <div className={style["number-of-pages-div"]}>
        <label
          className={style["number-of-pages-lable-div"]}
          htmlFor="numberOfPages"
        >
          Number of pages:
        </label>
        <input
          className={style["number-of-pages-input-div"]}
          type="text"
          name="numberOfPages"
          placeholder="Nuber of pages"
          defaultValue={formData["numberOfPages"]}
          onChange={handleValueChanged}
        />
      </div>
      <div className={style["format-div"]}>
        <label className={style["format-lable-div"]} htmlFor="format">
          Format:
        </label>
        <input
          className={style["format-input-div"]}
          type="text"
          name="format"
          placeholder="Format"
          defaultValue={formData["format"]}
          onChange={handleValueChanged}
        />
      </div>
      <div className={style["edition-div"]}>
        <label className={style["edtion-lable-div"]} htmlFor="edition">
          Edition:
        </label>
        <input
          className={style["edtion-input-div"]}
          type="text"
          name="edition"
          placeholder="Edition"
          defaultValue={formData["edition"]}
          onChange={handleValueChanged}
        />
      </div>
      <div className={style["edition-language-div"]}>
        <label
          className={style["edtion-language-lable-div"]}
          htmlFor="editionLanguage"
        >
          Edition language:
        </label>
        <input
          className={style["edtion-language-input-div"]}
          type="text"
          name="editionLanguage"
          placeholder="Edition language"
          defaultValue={formData["editionLanguage"]}
          onChange={handleValueChanged}
        />
      </div>
      <div className={style["description-div"]}>
        <label className={style["description-label-div"]} htmlFor="description">
          Description:
        </label>
        <input
          className={style["description-input-div"]}
          type="text"
          name="description"
          placeholder="Type the description..."
          defaultValue={formData["description"]}
          onChange={handleValueChanged}
        />
        <img className={style["UnderlineIcon"]} src={underline} />
        <img className={style["LinkIcon"]} src={link} />
        <img className={style["ArrobaIcon"]} src={arroba} />
      </div>
      <br></br>
      <button
        className={style["button-back"]}
        onClick={navigateTo("subgenres")}
      >
        Back
      </button>
      <button
        className={style["button-forward"]}
        onClick={submitFormAndNavigateToSuccess}
      >
        Add
      </button>
    </div>
  );
}

export default AddInformation;
