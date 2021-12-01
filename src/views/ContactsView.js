import { useState, lazy } from "react";
const ContactList = lazy(() =>
  import("components/ContactList" /* webpackChunkName: 'contact-list' */)
);
const Filter = lazy(() =>
  import("components/Filter" /* webpackChunkName: 'filter' */)
);
const CreateView = lazy(() =>
  import("views/CreateView" /* webpackChunkName: 'create-view' */)
);

export default function ContactsView() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <CreateView />

      <Filter />
      <ContactList />
    </>
  );
}
