import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const SinglePlayer = () => {
  const [player, setPlayer] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getPlayer = async () => {
      try {
        const response = await fetch(
          `https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-PT/players/${id}`
        );
        const data = await response.json();
        setPlayer(data.data.player);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error.message);
        setLoading(false);
      }
    };
    getPlayer();
  }, [id]);

  return (
    <>
      {error ? (
        <h1>{error}</h1>
      ) : player ? (
        <>
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
                <Typography variant="body2" color="text.secondary">
                  {player.id}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {player.status}
                </Typography>
              </CardContent>
            </Card>
          </div>
        </>
      ) : (
        <h1>Loading....</h1>
      )}
    </>
  );
};

export default SinglePlayer;