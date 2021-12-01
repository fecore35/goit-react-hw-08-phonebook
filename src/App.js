import { useEffect, lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import { useDispatch } from "react-redux";
import { authOperations } from "redux/auth";
const Header = lazy(() =>
  import("components/Header" /* webpackChunkName: 'header-view' */)
);
const HomeView = lazy(() =>
  import("views/HomeView" /* webpackChunkName: 'home-view' */)
);
const ContactsView = lazy(() =>
  import("views/ContactsView" /* webpackChunkName: 'contacts-view' */)
);
const RegisterView = lazy(() =>
  import("views/RegisterView" /* webpackChunkName: 'register-view' */)
);
const LoginView = lazy(() =>
  import("views/LoginView" /* webpackChunkName: 'login-view' */)
);
const NotFoundView = lazy(() =>
  import("views/NotFoundView" /* webpackChunkName: '404-view' */)
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div className="container">
      <Suspense fallback={<h1>Loading </h1>}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<HomeView />} />
            <Route path="contacts" element={<ContactsView />} />
            <Route path="register" element={<RegisterView />} />
            <Route path="login" element={<LoginView />} />
            <Route path="*" element={<NotFoundView />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
