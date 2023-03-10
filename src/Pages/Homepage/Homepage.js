import Navbar from "../../Componets/layout/Navbar/Navbar";
import Banner from "../../Componets/Herosection/Hero-section";
import Courselist from "../../Componets/Courselist/Courselist";
import Teachwithus from "../../Componets/layout/Banner-Teachwithus/Teachwithus";
import Footer from "../../Componets/layout/Footer/footer";


function Homepage(isAuthenticated,user) {

  return (
    <div>
      <Navbar isAuthenticated={isAuthenticated} user={user} />
      <Banner />
      <Courselist />
      <Teachwithus />
      <Footer />
    </div>
  );
}

export default Homepage;
