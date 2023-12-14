// import { sign } from "jsonwebtoken";
// import { config } from "dotenv";

// config();

const generateToken = (id) => {
    return sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    })
}

export default generateToken;