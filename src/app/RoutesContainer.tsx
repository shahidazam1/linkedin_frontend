import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import loadable from "@loadable/component";

const Feed = loadable(() => import("pages/feed"));
const MyNetwork = loadable(() => import("pages/my-network"));
const Jobs = loadable(() => import("pages/jobs"));
const Messaging = loadable(() => import("pages/messaging"));
const Notifications = loadable(() => import("pages/notifications"));
const MainHeader = loadable(() => import("layouts/mainHeader"));
const Profile = loadable(() => import("pages/profile"));
const Connections = loadable(() => import("pages/connections"));
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
          <Route path="jobs" element={<Jobs />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="messaging" element={<Messaging />} />
          <Route path="profile" element={<Profile />} />
          <Route path="connections" element={<Connections />} />
        </Route>
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
      </Routes>
    </Router>
  );
};

export default RoutesContainer;
