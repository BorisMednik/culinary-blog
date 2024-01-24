import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nissan from "./pages/Nissan";
import Renault from "./pages/Renault";
import Volkswagen from "./pages/Volkswagen";
import Homepage from "./pages/homepage";
import Layout from "./components/Layout";
import Restoran from "./pages/restoran";
import NAV from "./components/nav";

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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage data={Profiles} />} />
          {/*   <Route path="/" element={<Homepage />}/> */}
          <Route path="/Nissan" element={<Nissan />} />
          <Route path="/Renault" element={<Renault />} />
          <Route path="/Volkswagen" element={<Volkswagen />} />
          <Route path="/Restoran/:id" element={<Restoran data={Profiles} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
