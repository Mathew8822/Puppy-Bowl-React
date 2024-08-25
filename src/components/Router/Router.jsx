import React from "react";
import { Route, Routes } from "react-router-dom";
import GetPlayers from "../GetPlayers";
import AddPlayer from "../AddPlayer";
import SinglePlayer from "../SinglePlayer";
import HomePage from "../HomePage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/players" element={<GetPlayers />} />
      <Route path="/addplayer" element={<AddPlayer />} />
      <Route path="/player/:id" element={<SinglePlayer />} />
    </Routes>
  );
};

export default Router;