import style from "./SubgenrePicker.module.css";

function SubgenrePicker(props) {
  const { children, genres, formData, editFormField, navigateTo } = props;
  const genreInForm = formData["genre"];
  const selectedGenre = genres.filter(
    (genre) => genre.id == genreInForm["id"]
  )[0];

  return (
    <div className={style["SubgenrePickerWindow"]}>
      <h5 className={style["subgenre-picker-title"]}>Add Book - New book</h5>
      <div className={style["WizardHeader"]}>{children}</div>
      {selectedGenre.subgenres.map((subgenre, _) => {
        return (
          <button
            className={style["subgenre-button"]}
            className={
              formData["subgenre"]["id"] === subgenre.id
                ? style["button-selected"]
                : style["button"]
            }
            key={subgenre.id}
            id={subgenre.id}
            name={subgenre.name}
            onClick={editFormField("subgenre", subgenre)}
          >
            {subgenre.name}
          </button>
        );
      })}

      <button
        className={style["button-add-new"]}
        onClick={navigateTo("addNewSubgenre")}
      >
        Add new
      </button>
      <br></br>
      <button className={style["button-back"]} onClick={navigateTo("genres")}>
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

export default SubgenrePicker;
