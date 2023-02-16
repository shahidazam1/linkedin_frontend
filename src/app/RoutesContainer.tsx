import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import loadable from "@loadable/component";

const Feed = loadable(() => import("pages/feed"));
const MyNetwork = loadable(() => import("pages/my-network"));
const MainHeader = loadable(() => import("layouts/mainHeader/Header"));
const Profile = loadable(() => import("pages/profile"));
const Signup = loadable(() => import("pages/signup"));
const Signin = loadable(() => import("pages/signin"));

const RoutesContainer = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainHeader />}>
          <Route index element={<Navigate to="feed" />} />
          <Route path="feed" element={<Feed />} />
          <Route path="my-network" element={<MyNetwork />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
      </Routes>
    </Router>
  );
};

export default RoutesContainer;
