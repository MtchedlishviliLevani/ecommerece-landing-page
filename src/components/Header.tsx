import profilePicture from "../assets/images/profile-picture.png";
import basketIcon from "../assets/images/basket-icon.svg";
import sneaker from "../assets/images/sneaker-pic-cart.png";
import bin from "../assets/images/bin-icon.svg";
import "animate.css";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import {
  setIsShowedCartBox,
  setIsItem,
  setAmountItem,
  setIsShowedAmount,
} from "../redux/cartSlice";

const linksList = ["collection", "men", "women", "about", "contact"];

function Header() {
  const amountItem = useSelector((state: RootState) => state.cart.amountItem);
  const isShowedAmount = useSelector(
    (state: RootState) => state.cart.isShowedAmount
  );

  const isItem = useSelector((state: RootState) => state.cart.isItem);
  const isShowedCartBox = useSelector(
    (state: RootState) => state.cart.isShowedCartBox
  );
  const dispatch = useDispatch();
  const handleToggleCartBox = () => {
    dispatch(setIsShowedCartBox(!isShowedCartBox));
    if (amountItem > 0) {
      dispatch(setIsItem(true));
      dispatch(setIsShowedAmount(true));
    } else {
      dispatch(setIsItem(false));
    }
  };

  function removeSelectedItems() {
    dispatch(setAmountItem(0));
    dispatch(setIsShowedCartBox(false));
    if (amountItem) dispatch(setIsShowedAmount(false));
  }

  return (
    <header className="pt-[25px] pb-[49px] border-solid border-b text-black-200 ">
      <nav className="flex items-center justify-between">
        <div className="flex gap-12 items-center">
          <div className="animate__animated animate__bounce">
            <span className="cursor-pointer text-black font-bold text-2xl font-kumbh tracking-tighter ">
              SNEAKERS
            </span>
          </div>
          <ul className="flex md:hidden justify-between gap-8 lg:gap-5 font-kumbh md:gap-4">
            {linksList.map((link, index) => (
              <li
                className="text-[15px] relative first-letter:uppercase  cursor-pointer text-[#69707D] hover:text-red-300 contenet before:content['']
                 hover:before:w-[100%] hover:before:h-[4px] hover:before:bg-orange-300 hover:before:absolute 
                 hover:before:top-[370%]"
                key={index}
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex  gap-11 lg:gap-9 relative">
          <img
            className="cursor-pointer"
            src={basketIcon}
            alt=""
            onClick={handleToggleCartBox}
          />
          {isShowedAmount ? (
            <div className="h-[13px] w-[19px] absolute top-[10px] left-[9px] bg-[#FF7E1B] flex justify-center items-center rounded-[6.5px]">
              <span className="text-[10px] font-bold text-[white]">
                {amountItem}
              </span>
            </div>
          ) : null}

          <img
            className="w-[50px] cursor-pointer"
            src={profilePicture}
            alt=""
          />

          <div
            className={`top-[198px] shadow-[0_20px_50px_-20px_rgba(29,32,38,0.5)] bg-white w-[360px]  absolute translate-x-[-50%] translate-y-[-50%]  pt-[32px] pb-[24px] rounded-[10px] ${
              isShowedCartBox ? "block" : "hidden"
            }`}
          >
            <div className="px-[24px]">
              <h2 className="mb-[25px] font-kumbh text-[#1D2026] font-bold">
                Cart
              </h2>
            </div>

            <div className="h-px w-[100%] bg-[#E4E9F2] my-[24px]"></div>
            {isItem ? (
              <div className="px-[24px]">
                <div className="flex justify-between ">
                  <img src={sneaker} alt="" />
                  <div>
                    <span className="font-kumbh text-[#69707D]">
                      Fall Limited Edition Sneakers
                    </span>
                    <div className="flex gap-3">
                      <span className="font-kumbh text-[#69707D]">
                        $125.00 x {amountItem}
                      </span>
                      <span className="font-kumbh text-[#1D2026] font-bold">
                        {`${125 * amountItem} $`}
                      </span>
                    </div>
                  </div>
                  <img
                    src={bin}
                    alt=""
                    className="cursor-pointer"
                    onClick={removeSelectedItems}
                  />
                </div>
                <button className="bg-[#FF7E1B] w-[100%] mt-[24px] font-kumbh py-[16px] text-[white] rounded-[10px]">
                  Checkout
                </button>
              </div>
            ) : (
              <span className="text-center block font-kumbh text-[#69707D] font-bold my-[63px]">
                Your cart is empty
              </span>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
