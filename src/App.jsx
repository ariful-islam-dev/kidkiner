import "./App.css";
import About from "./components/About/About";
import Article from "./components/Article/Article";
import Banner from "./components/Banner/Banner";
import Classes from "./components/Classes/Classes";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Oportunity from "./components/Oportunity/Oportunity";
import SeatBook from "./components/SeatBook/SeatBook";
import Teacher from "./components/Teacher/Teacher";
import Testimonial from "./components/Testimonial/Testimonial";
import { data } from "./data/data";

function App() {
  return (
    <div>
      <Header
        logo={data.header.logo}
        navbar={data.header.navbar}
        joinClass={data.header.class}
      />
      <Banner banner={data.banner} />
      <Oportunity oportunity={data.oportunity} />
      <About about={data.about} />
      <Classes classes={data.class} />
      <SeatBook book={data.book} />
      <Teacher teachers={data.teacher} />
      <Testimonial testimonial={data.testimonial} />
      <Article blog={data.blog} />
      <Footer />
    </div>
  );
}

export default App;
