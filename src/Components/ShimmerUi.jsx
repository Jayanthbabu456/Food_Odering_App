import React from "react";

const ShimmerUi = () => {
  return (
    <div className="bg-orange-100 shadow-xl rounded-md w-[95%] mx-auto my-2 py-5 px-5 min-h-[550px] animate-pulse">
      <div className="w-[80%] mx-auto">
        <div className="flex flex-col gap-[10px]">
          <div className="animate-shimmer h-5 bg-orange-200 w-[50%]"></div>
          <div className="animate-shimmer h-5 bg-orange-200 mt-2 w-[30%] "></div>
        </div>
        <div className="mt-[20px]">
          <div className="animate-shimmer h-5 bg-orange-200 w-[20%] "></div>
          <div className="animate-shimmer h-5 bg-orange-200 mt-2 w-[10%] "></div>
        </div>
      </div>

      {/* Shimmer for the cards */}
      <div className="flex flex-col gap-[50px] mt-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
          <div
            key={index}
            className="flex flex-col gap-[30px] font-Montserrat w-[80%] mx-auto mt-[10px] px-5 "
          >
            <div className="h-4 bg-orange-200 w-[80%]"></div>
            <div className="relative">
              <div className="h-4 bg-orange-200 mt-2 w-[60%]"></div>
              <div className="h-4 bg-orange-200 mt-2 w-[40%]"></div>

              <div className="w-[120px] h-[120px] absolute right-0 bottom-[10px]">
                <div className=" bg-orange-200 mt-2 w-[100%] h-[100%] object-cover rounded-lg"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShimmerUi;
