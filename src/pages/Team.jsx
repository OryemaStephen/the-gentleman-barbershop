import Footer from "../components/Footer";
import ShopOffers from "../components/ShopOffers";
import TeamBg from "../components/TeamBg";
import TeamProfile from "../components/TeamProfile";

const Team = () => {
  return (
    <div>
      <TeamBg title="Our Team" text="Together, we make you new." />
      <TeamProfile />
      <ShopOffers />
      <Footer />
    </div>
  );
};

export default Team;
