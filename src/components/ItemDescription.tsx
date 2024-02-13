import minus from "../assets/images/minus.svg";
import plus from "../assets/images/plus.svg";
import basket from "../assets/images/white-basket.svg";
import type { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../redux/counterSlice";
import { setIsShowedAmount, setAmountItem } from "../redux/cartSlice";
// import { useEffect } from "react";

function ItemDescription() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);
  const amountItem = useSelector((state: RootState) => state.cart.amountItem);

  function addToCart() {
    dispatch(setAmountItem(amountItem + count));
    // count reset
    dispatch(reset());
    if (count > 0) {
      dispatch(setIsShowedAmount(true));
    }
  }
  return (
    <div className="w-[43%]  xl:w-[46%] md:w-[100%] flex flex-col justify-center">
      <h2 className="text-xs text-[#FF7E1B] font-bold font-kumbh">
        Sneaker Company
      </h2>
      <h1 className="text-[#1D2026] text-[44px] leading-[48px]     xl:text-3xl lg:text-xl xl:leading-8 font-kumbh mt-[27px] lg:mt-[20px] md:mt-[18px] mb-[32px]  lg:mb-[20px] md:mb-[15px]">
        Fall Limited Edition Sneakers
      </h1>
      <p className="text-[#69707D] font-kumbh leading-[26px] xl:leading-6">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="mt-[24px] lg:mt-[20px] mb-[32px] lg:mb-[26px] md:flex md:items-center md:justify-between ">
        <div className="flex items-center gap-4 md:gap-12 ">
          <div>
            <span className="text-[28px] font-bold font-kumbh">$125.00</span>
          </div>
          <div className="bg-[#FFEEE2]  rounded-md px-[10px] py-[3px]">
            <span className="text-[#FF7E1B] font-bold  ">50%</span>
          </div>
        </div>
        <div className="">
          <span className="text-[#B6BCC8] line-through">$250.00</span>
        </div>
      </div>
      <div className="flex items-center gap-[1rem] md:flex-col">
        <div className="
        -[#F6F8FD] flex max-w-[157px] sm:max-w-[767px] md:w-[100%] lg:max-w-[120px] w-[90%] items-center justify-between rounded-[10px]  py-[16px] px-[16px] lg:px-[10px]">
          <img
            className="cursor-pointer"
            src={minus}
            onClick={() => dispatch(decrement())}
          />
          <span>{count}</span>
          <img
            className="cursor-pointer"
            src={plus}
            onClick={() => dispatch(increment())}
          />
        </div>
        <button onClick={addToCart} className="button">
          <img src={basket} alt="" />
          <span className="font-kumbh text-white">Add to cart</span>
        </button>
      </div>
    </div>
  );
}

export default ItemDescription;
