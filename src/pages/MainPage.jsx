// import { useHistory } from "react-router-dom";
import { Navbar } from "../components";
import { Route , Switch } from "react-router-dom";
import { Posts } from "./Posts";
import { UserDetails } from "./UserDetails";
import { Users } from "./Users";
import { Contactus } from "./Contactus";

export const MainPage = () => {
    // const history = useHistory();

    // const handleLogout = () => {
    //     localStorage.removeItem("myowntoken");
    //     history.replace("/login");
    // };
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <Switch>
                    <Route path="/posts">
                        <Posts />
                    </Route>
                    <Route path="/users/:id">
                        <UserDetails />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/Contactus">
                        <Contactus />
                    </Route>
                </Switch>
            </div>

            <br />
            <h4>main-page</h4>
            <br />
            {/* <button className="btn btn-danger" onClick={handleLogout}>
                Log Out
      </button> */}
        </>
    );
};
