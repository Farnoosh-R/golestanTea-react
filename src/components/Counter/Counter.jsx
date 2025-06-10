const Counter = () => {
  return (
    <>
      <div className="flex gap-4 text-center container-min py-[50px]">
        <div className="border-b-1 border-gray-300">
          <img src="./images/statistics-1.png" alt="" />
          <h5 className="my-3">سرمایه انسانی</h5>
        </div>
        <div className="border-b-1 border-gray-300">
          <img src="./images/statistics-2.png" alt="" />
          <h5 className="my-3">مراكز فروش</h5>
        </div>
        <div className="border-b-1 border-gray-300">
          <img src="./images/statistics-3.png" alt="" />
          <h5 className="my-3">محصولات گلستان</h5>
        </div>
        <div className="border-b-1 border-gray-300">
          <img src="./images/statistics-4.png" alt="" />
          <h5 className="my-3">مشتریان گلستان</h5>
        </div>
      </div>
    </>
  );
};
export default Counter;
