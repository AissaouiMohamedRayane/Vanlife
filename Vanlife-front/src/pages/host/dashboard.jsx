import star from "../../assets/star.svg";
import HostVans from "./host-vans";
export default function Dashboard() {
  return (
    <main className="dashboard-main">
      <section className="layout-padding flex-column gap-20 dashboard-welcome">
        <h1 className="dashboard-welcome-h1">Welcome!</h1>
        <div className="flex-spacebetween">
          <p className="dashboard-welcome-p">
            Income last <span>30 days</span>
          </p>
          <h6 className="dashboard-detail scale hover">Details</h6>
        </div>
        <h1 className="dashboard-welocome-number">$2,260</h1>
      </section>
      <section className="layout-padding dashboard-review">
        <div className="flex-spacebetween">
          <div className="flex end gap-10">
            <h2 className="dashboard-review-h2">Review score</h2>
            <span className="flex trn--5">
              <img src={star} className="star" alt="star" />
              <h6 className="dashboard-review-h6">
                <span className="weight-900 pd-l--5">5.0</span>/5
              </h6>
            </span>
          </div>
          <h6 className="dashboard-detail">Details</h6>
        </div>
      </section>
      <HostVans />
    </main>
  );
}
