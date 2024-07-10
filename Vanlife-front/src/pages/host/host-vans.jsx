import VanListCard from "../../utility-componentes/van-list-card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getHostedVans from "../../API/getHostedVans";
export default function HostVans() {
  const [hostVans, setHostVans] = useState([]);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getHostedVans();
        setHostVans(data);
      } catch (err) {
        setErr(err);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, []);
  const mapedVans = hostVans.map((van) => {
    return (
      <Link
        key={van.id}
        to={`/host/vans/${van.id}`}
        state={hostVans}
        className='no-decoration_link'
      >
        <VanListCard
          id={van.id}
          img={van.image}
          name={van.name}
          price={van.price}
        />
      </Link>
    );
  });
  return (
    <section className='layout-margin'>
      <div className='flex-spacebetween'>
        <h1 className='Your-listed-vans'>Your listed vans</h1>
        <h6 className='dashboard-detail'>View All</h6>
      </div>
      {loading ? (
        <h1 className='layout-margin'>Loading...</h1>
      ) : err ? (
        <h1 className='layout-margin'>{err.message}</h1>
      ) : (
        mapedVans
      )}
    </section>
  );
}
