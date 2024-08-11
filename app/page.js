import Onebox from "../components/OneBox";
import Login from "../components/LoginForm";

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
      <Onebox />
    </>
  );
}
