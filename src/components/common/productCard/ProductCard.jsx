import { Link } from "react-router";
import "./productCard.css";
import { Box, Button } from "@mui/material";
export const ProductCard = ({ item }) => {
  return (
    <div style={{ width: "300px", border: "1px solid black" }}>
      <img
        style={{ width: "100%", height: "200px" }}
        src={item.imageUrl}
        alt=""
      />
      <Box
        sx={{
          padding: "10px",

          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <h3> {item.title} </h3>
        <h3> {item.price} </h3>

        <Button variant="contained" color="primary">
          <Link
            to={`/itemDetail/${item.id}`}
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Ver detalle
          </Link>
        </Button>
      </Box>
    </div>
  );
};
