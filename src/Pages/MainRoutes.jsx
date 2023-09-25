import React from "react";
import { Route, Routes } from "react-router-dom";
import Gallery from "./Gallery";
import LandingPage from "./LandingPage";
import Post from "./Post";
import Profile from "./Profile";
import HomePage from "./HomePage";
import ToDo from "./ToDo";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/profile/:userId" element={<HomePage />} />

        <Route path="/profile/:userId" element={<Profile />} />

        <Route path="/profile/posts" element={<Post />} />

        <Route path="/profile/gallery" element={<Gallery />} />

        <Route path="/profile/todo" element={<ToDo />} />

        <Route
          path="*"
          element={
            <img
              style={{ margin: "auto" }}
              src="https://i.pinimg.com/originals/11/dc/96/11dc96d2e4daca3ea8ff6aa41299b5e1.gif"
              alt=""
            />
          }
        />
      </Routes>
    </div>
  );
};

export default MainRoutes;
