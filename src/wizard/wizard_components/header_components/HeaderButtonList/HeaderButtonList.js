import HeaderButton from "../HeaderButton/HeaderButton";
import style from "./HeaderButtonList.module.css";

function HeaderButtonList(props) {
  // props.whichButtonIsActive [Number]
  const { whichButtonIsActive } = props;

  const shouldFistVariantBeDisplayed = whichButtonIsActive < 2;
  const firstVariantList = [
    { value: "1", isActive: false, name: "Genre" },
    { value: "2", isActive: false, name: "Subgenre" },
    { value: "...", isActive: false, name: "" },
  ];
  const secondVariantList = [
    { value: "1", isActive: false, name: "Genre" },
    { value: "2", isActive: false, name: "Subgenre" },
    { value: "3", isActive: false, name: "Add new subgenre" },
    { value: "4", isActive: false, name: "Information" },
  ];
  return (
    <div>
      {shouldFistVariantBeDisplayed ? (
        <div className={style["HeaderButtonList"]}>
          {firstVariantList.map((buttonInfo, index) => {
            return (
              <HeaderButton
                key={index}
                value={buttonInfo.value}
                name={buttonInfo.name}
                isButtonActive={
                  index == props.whichButtonIsActive &&
                  props.whichButtonIsActive < 2
                }
              ></HeaderButton>
            );
          })}
        </div>
      ) : (
        <div className={style["HeaderButtonList"]}>
          {secondVariantList.map((buttonInfo, index) => {
            return (
              <HeaderButton
                key={index}
                value={buttonInfo.value}
                name={buttonInfo.name}
                isButtonActive={
                  index == props.whichButtonIsActive &&
                  props.whichButtonIsActive < 4
                }
              ></HeaderButton>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default HeaderButtonList;
