import { useEffect } from "react";
import { Route, Routes } from "react-router";
import { useDispatch } from "react-redux";
import Header from "components/Header";
import HomeView from "views/HomeView";
import CreateView from "views/CreateView";
import RegisterView from "views/RegisterView";
import LoginView from "views/LoginView";
import NoFoundView from "views/NotFoundView";
import { authOperations } from "redux/auth";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, []);

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomeView />} />
          <Route path="create" element={<CreateView />} />
          <Route path="register" element={<RegisterView />} />
          <Route path="login" element={<LoginView />} />
          <Route path="*" element={<NoFoundView />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
