import React from "react";
// import { useJwt } from "react-jwt";

// import dotenv from "dotenv";

// dotenv.config();

export const generateToken = (id) => {
    /*return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    })*/
};

export const verifyToken = (token) => {
    /*try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        throw new Error('Invalid token');
    }*/
};

export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }