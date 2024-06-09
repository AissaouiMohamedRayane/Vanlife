import layoutPadding from "../../Layout/layout-padding";
import { WidthContext } from "../../Layout/layout";
import { useContext } from "react";
export default function Income() {
  const screenWidth = useContext(WidthContext);
  return (
    <main className={layoutPadding(screenWidth)}>
      <div className='flex baseline gap-20'>
        <h1 className='income-h1'>Your reviews</h1>
        <div className='flex'>
          <span className='last'>last </span>
          <span className="mr-l-5 days">30 days</span>
        </div>
      </div>
    </main>
  );
}
