import Filter from "components/Filter";
import ContactList from "components/ContactList";

function HomeView() {
  return (
    <>
      <h1>Phonebook</h1>

      <Filter />
      <ContactList />
    </>
  );
}

export default HomeView;
