import { useParams, Link } from "react-router-dom";

const Restoran = ({ data }) => {
  const { id } = useParams();

  return (
    <>
      {data
        .filter((profile) => profile.id === id)
        .map((profile, index) => (
          <div className="restik">
            <div className="adress"></div>
            <div className="name">
              <h1>{profile.name}</h1>
            </div>
            <div className="rating"></div>
            <div className="photo">
              <img src={profile.image} alt={profile.id} />
            </div>
            <div className="disc">
              <p>{profile.disc}</p>
            </div>
            <div className="info">
              <div className="tel">
                <h4>телефон</h4>
                <span>{profile.phone}</span>
              </div>
              <div className="check">
                <h4>средний чек</h4>
                <span>{profile.price}</span>
              </div>
              <div className="worktime">
                <h4>время работы</h4>
                <span>{profile.worktime}</span>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Restoran;
/* https://codesandbox.io/p/sandbox/shy-cdn-3n0ke9?file=%2Fsrc%2Fcomponents%2FCardComponent.jsx%3A18%2C5 */
