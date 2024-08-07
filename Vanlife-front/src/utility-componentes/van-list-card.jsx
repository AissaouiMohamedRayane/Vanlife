import { NavLink } from "react-router-dom";
export default function VanListCard(props) {
  return (
    <main className="flex-spacebetween van-list-card scale-5 hover">
      <div className="flex gap-30">
        <img className="van-list-img" src={props.img} alt="vanImage" />
        <div className="flex-column gap-20">
          <h3 className="van-list-vanname">{props.name}</h3>
          <h6 className="van-list-price">${props.price}/day</h6>
        </div>
      </div>
      <NavLink className="dashboard-detail" to={`/host/edit/${props.id}`}>Edit</NavLink>
    </main>
  );
}
