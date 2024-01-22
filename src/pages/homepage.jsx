import homepage_style from "../pages/homepage_style.css";
import Card from "../components/card";
/* import {Link} from "react-router-dom" */

const Profiles = [
  {
    name: "Nissan",
    type: "sedan",
    color: "red",
    image:
      "https://quto.ru/thumb/1720x0/filters:quality(75):no_upscale()/service-imgs/63/4e/56/22/634e562299bc0.jpeg",
    link: "/Nissan",
  },
  {
    name: "Renault",
    type: "crossover SUV",
    color: "red",
    image:
      "https://quto.ru/thumb/1720x0/filters:quality(75):no_upscale()/service-imgs/64/cb/b4/96/64cbb49655a39.jpeg",
    link: "/Renault",
  },
  {
    name: "Volkswagen",
    type: "hatcback",
    color: "green",
    image:
      "https://quto.ru/thumb/1720x0/filters:quality(75):no_upscale()/service-imgs/64/41/41/83/644141835bd02.jpeg",
    link: "/Volkswagen",
  },
];

const Homepage = () => {
  return (
    <div className="card_box">
      {Profiles.map((profile) => (
        <div key={profile}>
          <Card
            profile={profile}
            /*   image = {profile.image}
                   name = {profile.name}
                   link = {profile.link} */
          />
        </div>
      ))}
    </div>
  );
};

export default Homepage;
