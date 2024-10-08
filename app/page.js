import Onebox from "../components/OneBox";
import Login from "../components/LoginForm";
import InboxPage from "../components/Inbox";
import Inbox from "../components/EmailOpen";

/**
 * Renders the Home component which displays the Login component.
 * @example
 * Home()
 * <Login />
 * @returns {JSX.Element} The Login component.
 * @description
 *   - This function acts as a container component for Login.
 */
export default function Home() {
  return (
    <>
      {/* <Login /> */}
      {/* <Onebox /> */}
      {/* <InboxPage /> */}
      <Inbox />
    </>
  );
}
