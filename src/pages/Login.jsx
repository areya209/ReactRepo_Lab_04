import { Input } from "../components/Input";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isValidCred, setIsValidCred] = useState(true);

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        //Dummy code
        if (email === "areya0133@gmail.com" && password === "20997") {
            localStorage.setItem("myowntoken", "12345");
            // history.push("/Users");
            history.replace("/Users");
            
        } else setIsValidCred(false);
    };
    return (
        <div className="d-flex justify-content-center">
            <form className="card p-3 col-6" onSubmit={handleSubmit}>
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    setValue={setEmail}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                />
                {!isValidCred && (
                    <div className="alert alert-danger">Please Enter Your Valid Data</div>
                )}
                <button className="btn btn-primary">Submit Your Data</button>
            </form>
        </div>
    );
};
