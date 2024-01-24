import homepage_style from "../pages/homepage_style.css";
import Card from "../components/card";
import Rest_Card from "../components/rest_card";
/* import {Link} from "react-router-dom" */

/* const Profiles = [
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
]; */
const Profiles = [
  {
    id: 1,
    name: "Москва",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/16/f5/30/26/caption.jpg",
    disc: "_",
    worktime: "12:00 PM - 11:00 PM",
    phone: "+7 910 647-60-89",
    price: "250 руб - 990 руб",
  },
  {
    id: 2,
    name: "Орех",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/1d/1d/59/29/caption.jpg",
    disc: "_",
    worktime: "11:00 PM - 11:00 PM",
    phone: "+7 482 264-49-94",
    price: "150 руб - 700 руб",
  },
  {
    id: 3,
    name: "Кафе Манилов",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-p/15/fd/7a/ac/photo0jpg.jpg",
    disc: "«Манилов» — кафе для основательных людей, которые ценят русскую кухню, комфорт, имеют высшее образование, знают годы жизни Николая Васильевича Гоголя, отличают «Чайку» от «Трех Сестер», а также их друзей и им сочувствующих.",
    worktime: "11:00 PM - 12:00 PM",
    phone: "+7 482 247-64-95",
    price: "300 руб - 1200 руб",
  },
];

const Homepage = () => {
  return (
    <div className="card_box">
      {Profiles.map((profile) => (
        <div key={profile}>
          <Rest_Card
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
