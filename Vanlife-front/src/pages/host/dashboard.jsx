import star from "../../assets/star.svg";
import HostVans from "./host-vans";
import { useContext } from "react";
import { WidthContext } from "../../Layout/layout";
import layoutPadding from "../../Layout/layout-padding";
export default function Dashboard() {
  const screenWidth = useContext(WidthContext);
  return (
    <main>
      <section
        className={`flex-column dashboard-welcome ${layoutPadding(
          screenWidth
        )} ${
          screenWidth > 900 ? "gap-20" : screenWidth > 550 ? "gap-10" : "gap-5"
        }`}
      >
        <h1 className='dashboard-welcome-h1'>Welcome!</h1>
        <div className='flex-spacebetween'>
          <p className='dashboard-welcome-p'>
            Income last <span>30 days</span>
          </p>
          <h6 className='dashboard-detail scale hover'>Details</h6>
        </div>
        <h1 className='dashboard-welocome-number'>$2,260</h1>
      </section>
      <section className={`dashboard-review ${layoutPadding(screenWidth)}`}>
        <div className='flex-spacebetween'>
          <div className='flex gap-10'>
            <h2 className='dashboard-review-h2'>Review score</h2>
            <span className={`flex end`}>
              <img src={star} className='star' alt='star' />
              <h6 className='dashboard-review-h6 trn'>
                <span className='weight-900 pd-l--5'>5.0</span>/5
              </h6>
            </span>
          </div>
          <h6 className='dashboard-detail'>Details</h6>
        </div>
      </section>
      <HostVans />
    </main>
  );
}
