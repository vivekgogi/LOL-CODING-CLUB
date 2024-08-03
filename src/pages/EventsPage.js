import Header from "../components/Header/Header";
import FutureEvents from "../components/Events/FutureEvents";
import PastEvents from "../components/Events/PastEvents";
import Footer from "../components/Footer/Footer";

function EventsPage() {
  return (
    <div>
      <Header />
      <FutureEvents />
      <PastEvents />
      <Footer />
    </div>
  );
}

export default EventsPage;
