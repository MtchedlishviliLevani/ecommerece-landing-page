import { picturesList } from "../data/mainData";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import {
  setIsActiveMainPhotoIndex,
  setIsShowedSlider,
} from "../redux/sliderSlice";

function ItemPictures() {
  const dispatch = useDispatch();
  const activePhotoIndex = useSelector(
    (state: RootState) => state.slider.activeMainPhotoIndex
  );
  const mainPhoto = picturesList[activePhotoIndex].src.photo;
  function selectMainPicture(i: number) {
    dispatch(setIsActiveMainPhotoIndex(i));
  }
  return (
    <>
      <div className="w-[43%] xl:w-[46%] md:w-[100%]">
        <img
          onClick={() => {
            dispatch(setIsShowedSlider(true));
            window.scroll({
              top: 0,
            });
          }}
          src={mainPhoto}
          alt=""
          className="w-[450px] rounded-[16px] cursor-pointer"
        />
        {/* small imagesWrapper */}
        <div className="flex mt-[32px] justify-between md:hidden">
          {picturesList.map((picture, index) => (
            <img
              key={index}
              onClick={() => selectMainPicture(index)}
              src={picture.src.photo}
              className={`w-[85px] lg:w-[65px] xl:w-[75px] cursor-pointer rounded-md md:w-[65px]  ${index === activePhotoIndex ? "opacity-50" : ""
                }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ItemPictures;
