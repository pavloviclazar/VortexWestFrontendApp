import style from "./GenrePicker.module.css";
import { Children } from "react";

function GenrePicker(props) {
  const { children, genres, formData, editFormField, navigateTo } = props;

  return (
    <div className={style["GenrePickerWindow"]}>
      <h5 className={style["genre-picker-title"]}>Add Book - New book</h5>
      <div className={style["WizardHeader"]}>{children}</div>
      {genres.map((genre, _) => {
        return (
          <button
            className={style["genre-button"]}
            className={
              formData["genre"]["id"] === genre.id
                ? style["button-selected"]
                : style["button"]
            }
            key={genre.id}
            id={genre.id}
            name={genre.name}
            onClick={editFormField("genre", { id: genre.id, name: genre.name })}
          >
            {genre.name}
          </button>
        );
      })}
      <br></br>
      <button
        className={style["button-forward"]}
        onClick={navigateTo("subgenres")}
      >
        Next
      </button>
    </div>
  );
}

export default GenrePicker;
