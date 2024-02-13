import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import ItemDescription from "./components/ItemDescription";
import ItemPictures from "./components/ItemPictures";
import { RootState } from "./redux/store";
import { picturesList } from "./data/mainData";
import { setIsShowedSlider } from "./redux/sliderSlice";
import closeIcon from "../src/assets/images/exitIcon.svg";
import { useEffect, useState } from "react";
import rigthArrow from "../src/assets/images/rightArrow.svg";
import leftArrow from "../src/assets/images/leftArrow.svg";

function App() {
  const isShowedSlider = useSelector(
    (state: RootState) => state.slider.isShowedSlider
  );
  const activePhotoIndex = useSelector(
    (state: RootState) => state.slider.activeMainPhotoIndex
  );
  const dispatch = useDispatch();

  const [activePhoto, setActivePhoto] = useState<number>(activePhotoIndex);
  useEffect(() => {
    setActivePhoto(activePhotoIndex);
  }, [activePhotoIndex]);

  const mainPhoto = picturesList[activePhoto].src.photo;

  const prevSlide = (e: React.MouseEvent) => {
    setActivePhoto(
      (prevIndex) => (prevIndex - 1 + picturesList.length) % picturesList.length
    );
    e.stopPropagation();
  };

  return (
    <>
      {isShowedSlider ? (
        <div
          className="w-[100%] h-[120vh] bg-[rgb(0,0,0,0.75)] absolute z-10 "
          onClick={() => dispatch(setIsShowedSlider(false))}
        >
          <div className="opacity-[100] relative left-[50%] top-[38%]  w-[550px] min-h-[550px] translate-x-[-50%] translate-y-[-50%]">
            <img
              src={closeIcon}
              className="absolute left-[96%] lg:left-[83.5%] top-[-5.5%] lg:top-[5%] cursor-pointer z-30 "
              onClick={() => dispatch(setIsShowedSlider(false))}
            />
            <img
              onClick={(e) => {
                setActivePhoto(
                  (activePhoto) => (activePhoto + 1) % picturesList.length
                );
                e.stopPropagation();
              }}
              src={rigthArrow}
              className="absolute top-[50%] left-[95%] lg:left-[84%] translate-y-[-50%] z-30 cursor-pointer"
            />
            <img
              onClick={(e) => prevSlide(e)}
              src={leftArrow}
              className="absolute top-[50%] left-[-5%] lg:left-[5%] translate-y-[-50%] z-30 cursor-pointer"
            />
            <img
              src={mainPhoto}
              alt=""
              className="absolute  w-[550px] lg:w-[425px] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-20 opacity-100 rounded-xl"
              onClick={(e) => {
                e.stopPropagation();
                e.isPropagationStopped(); // Prevent event from bubbling up to parent div
              }}
            />
            <div className="flex justify-center gap-5 w-[100%] top-[105%] lg:top-[95%] absolute">
              {picturesList.map((picture, index) => (
                <div
                  key={index}
                  style={{
                    backgroundImage:
                      index === activePhoto
                        ? `linear-gradient(
                          to bottom,
                          rgba(256, 255, 255, 0.7),
                          rgba(255, 255, 255, 0.7)
                        ), url(${picture.src.photo})`
                        : `url(${picture.src.photo})`, // Provide a fallback value when the condition is not met
                  }}
                  className={`w-[88px] lg:w-[100px] h-[88px] lg:h-[100px] rounded-md bg-cover cursor-pointer 
                     `}
                  onClick={(e) => {
                    setActivePhoto(index);
                    e.stopPropagation();
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
      <div className="container max-w-[1110px] w-[90%] md:p-[0px] ">
        <Header />
        <main>
          <div className="flex md:flex-col my-[90px] max-w-[1015px] w-[90%]  m-auto md:mt-[0px] md:gap-[24px] lg:gap-[8%] xl:gap-[12%] gap-[14%]">
            <ItemPictures />
            <ItemDescription />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
