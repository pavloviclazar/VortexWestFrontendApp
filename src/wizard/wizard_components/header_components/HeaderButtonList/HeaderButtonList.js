import HeaderButton from "../HeaderButton/HeaderButton";
import style from "./HeaderButtonList";

function HeaderButtonList(props) {
  // props.whichButtonIsActive [Number]
  const { whichButtonIsActive } = props;
  const shouldFistVariantBeDisplayed = whichButtonIsActive < 2;
  const firstVariantList = [
    { value: "1", isActive: false },
    { value: "2", isActive: false },
    { value: "...", isActive: false },
  ];
  const secondVariantList = [
    { value: "1", isActive: false },
    { value: "2", isActive: false },
    { value: "3", isActive: false },
    { value: "4", isActive: false },
  ];
  return (
    <div className="HeaderButtonList">
      {shouldFistVariantBeDisplayed ? (
        <div>
          {firstVariantList.map((buttonInfo, index) => {
            return (
              <HeaderButton
                key={index}
                value={buttonInfo.value}
                isButtonActive={
                  index == props.whichButtonIsActive &&
                  props.whichButtonIsActive < 2
                }
              ></HeaderButton>
            );
          })}
        </div>
      ) : (
        <div>
          {secondVariantList.map((buttonInfo, index) => {
            return (
              <HeaderButton
                key={index}
                value={buttonInfo.value}
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
