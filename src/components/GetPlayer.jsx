import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
import "../index.css";
import DeletePlayer from "./DeletePlayer";
import { useSelector } from "react-redux";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Delete } from "@mui/icons-material";

const GetPlayers = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const searchTerm = useSelector((state) => state.searchTerm);

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch(
          "https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-PT/players"
        );
        const data = await response.json();
        setPlayers(data.data.players);
        console.log(data.data.players);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchPlayers();
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading players ...</h1>
      ) : (
        <div>
          {filteredPlayers?.map((player) => {
            return (
              <div key={player.id} className="playerCard">
                <Card sx={{ maxWidth: 400 }}>
                  <CardMedia
                    sx={{ height: 400, width: 300 }}
                    image={player.imageUrl}
                    title={player.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {player.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {player.breed}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      onClick={() => navigate(`/player/${player.id}`)}
                      size="small"
                    >
                      View Details
                    </Button>
                    <Button
                      size="small"
                      onClick={() => {
                        return DeletePlayer(player.id);
                      }}
                    >
                      Delete Player
                    </Button>
                  </CardActions>
                </Card>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default GetPlayers;