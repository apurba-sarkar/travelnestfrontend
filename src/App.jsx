import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Reviews from "./pages/Reviews";
import TravelList from "./pages/TravelList";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import UserList from "./pages/UserList";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/reviews" element={<Reviews />} />
        <Route exact path="/travellist" element={<TravelList />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/userlist" element={<UserList />} />
      </Routes>
    </QueryClientProvider>
  );
}
