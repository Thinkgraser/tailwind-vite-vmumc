import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Staff,
  Home,
  Calendar,
  Publications,
  Ministries,
  PrayerRequest,
  BuildingRequest,
  InformationRequest,
  Contact,
  Photos,
  Worship,
  Directions,
  Community,
  Services,
  Education,
  Beliefs,
  KidsCare,
  FoodPantry,
  Glow,
  Jam,
  PastorsMessage,
  AshWednesday,
  Lent,
  Vbs,
  YouthGroup,
  BreadMinistry,
  MissionMoment,
  MissionMomentTeams,
  KidsShoppingDay,
  EasterEggHunt,
  Confirmation,
  BibleGiving,
  SpecialServices,
  ChildrensChristmasProgram,
  ChristmasCantata,
  EasterBreakfast,
  ChristmasEveService,
  ShroveTuesday,
  Choir,
  ChristmasGiving,
  TrunkOrTreat,
  Scholarships,
} from "./pages";
import { Banner, Navbar, Footer } from "./components";
export default function App() {
  return (
    <Router>
      <div className="container bg-gradient-radial-c sm:my-3 mx-auto rounded-lg">
        <Banner />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/staff" element={<Staff />}></Route>
          <Route path="/calendar" element={<Calendar />}></Route>
          <Route path="/publications" element={<Publications />}></Route>
          <Route path="/ministries" element={<Ministries />}></Route>
          <Route path="/prayer-request" element={<PrayerRequest />}></Route>
          <Route path="/building-request" element={<BuildingRequest />}></Route>
          <Route path="/information-request" element={<InformationRequest />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/photos" element={<Photos />}></Route>
          <Route path="/worship" element={<Worship />}></Route>
          <Route path="/directions" element={<Directions />}></Route>
          <Route path="/community" element={<Community />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/education" element={<Education />}></Route>
          <Route path="/beliefs" element={<Beliefs />}></Route>
          <Route path="/kidscare" element={<KidsCare />}></Route>
          <Route path="/missionmomentfoodpantry" element={<FoodPantry />}></Route>
          <Route path="/glow" element={<Glow />}></Route>
          <Route path="/JAM" element={<Jam />}></Route>
          <Route path="/pastorsmessage" element={<PastorsMessage />}></Route>
          <Route path="/pastorsmessageashwednesday" element={<AshWednesday />}></Route>
          <Route path="/pastorsmessagelent" element={<Lent />}></Route>
          <Route path="/vbs" element={<Vbs />}></Route>
          <Route path="/ciayouth" element={<YouthGroup />}></Route>
          <Route path="/ministrybread" element={<BreadMinistry />}></Route>
          <Route path="/missionmoment" element={<MissionMoment />}></Route>
          <Route path="/missionmomentteams" element={<MissionMomentTeams />}></Route>
          <Route path="/ministrykidsshoppingday" element={<KidsShoppingDay />}></Route>
          <Route path="/ministryeasteregghunt" element={<EasterEggHunt />}></Route>
          <Route path="/ministryconfirmation" element={<Confirmation />}></Route>
          <Route path="/3rdgradebibleclass" element={<BibleGiving />}></Route>
          <Route path="/specialservices" element={<SpecialServices />}></Route>
          <Route
            path="/ministrychildrenschristmasprogram"
            element={<ChildrensChristmasProgram />}></Route>
          <Route path="/ministrychristmascantata" element={<ChristmasCantata />}></Route>
          <Route path="/ministryeasterbreakfast" element={<EasterBreakfast />}></Route>
          <Route path="/ministrychristmasevecandlelight" element={<ChristmasEveService />}></Route>
          <Route path="/ministryshrovetuesday" element={<ShroveTuesday />}></Route>
          <Route path="/choir" element={<Choir />}></Route>
          <Route path="/alternativechristmasgiving" element={<ChristmasGiving />}></Route>
          <Route path="/trunkortreat" element={<TrunkOrTreat />}></Route>
          <Route path="/scholarships" element={<Scholarships />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
