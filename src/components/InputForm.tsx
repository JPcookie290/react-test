import { ChangeEvent, FormEvent, useState } from "react";

export default function InputForm(){
    const initialUserData = {
        fullname: "",
        email: "",
        password: "",
        confirmPassword: ""
    };
    //State
    const [userData, setUserData] = useState(initialUserData);
    //Style Objects *****************************************
    const blockStyle = {
        display: "block",
    };
    const paddingStyle = {
        padding: "10px",
    };
    const btnStyle = {
        padding: "10px",
        backgroundColor: "#ADD8E6",
        border: "none",
        borderRadius: "3px",
    };
    //Style Objects *****************************************
    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement>,
        type: string
    ) => {
        setUserData({...userData, [type]: e?.target?.value});
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(userData);
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div style={paddingStyle}>
                <label style={blockStyle}>Fullname</label>
                <input type="text" value={userData.fullname} onChange={(e) => handleInputChange(e, "fullname")} />
            </div>
            <div style={paddingStyle}>
                <label style={blockStyle}>E-Mail</label>
                <input type="email" value={userData.email} onChange={(e) => handleInputChange(e, "email")} />
            </div>
            <div style={paddingStyle}>
                <label style={blockStyle}>Password</label>
                <input type="password" value={userData.password} onChange={(e) => handleInputChange(e, "password")} />
            </div>
            <div style={paddingStyle}>
                <label style={blockStyle}>Confirm Password</label>
                <input type="password" value={userData.confirmPassword} onChange={(e) => handleInputChange(e, "confirmPassword")} />
            </div>
            <div style={paddingStyle}>
                <button type="submit" style={btnStyle}>
                    Submit{" "}
                </button>
            </div>
        </form>
    )
}