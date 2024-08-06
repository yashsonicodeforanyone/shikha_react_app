import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, Pagination } from "@mui/material";
import axios from "axios";
import "../style.css";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch, useSelector } from "react-redux";
import { cardData } from "../redux/action";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function MainPage({ data, setData, loading }) {
  const [currentPage, setCurrentPage] = React.useState(1);

  const cardperPage = 6;
  const totalpages = Math.ceil(data.length / cardperPage);

  const handlePageChange = (e, value) => {
    setCurrentPage(value);
  };
  const getData = useSelector((state) => state.cardDataReducer);
  console.log("getDatagetData", getData);

  const showHorizonalData = useSelector(
    (state) => state.showHorizonalReducer.showData.data
  );
  const showVerticalData = useSelector((state) => state.showVerticalReducer);
  const startIndex = (currentPage - 1) * cardperPage;
  const cardShow = data.slice(startIndex, startIndex + cardperPage);

  const deleteCard = (e, id) => {
    setData(data.filter((data) => data.id !== id));
  };

  return (
    <div style={{ padding: "42px" }}>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <Box sx={{ minWidth: 275 }}>
          {showHorizonalData && (
            <Grid container spacing={2}>
              {cardShow.map((items, index) => (
                <Grid item xs={12} key={index}>
                  <React.Fragment>
                    <>
                      <CardContent className="card">
                        <ClearIcon
                          onClick={(e) => deleteCard(e, items.id)}
                          style={{ float: "right", color: "red" }}
                        />
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <img
                            src="./imgavtar.png"
                            style={{
                              width: "64px",
                              height: "64px",
                              marginRight: "30px",
                            }}
                          />
                          <div>
                            <h2>{items.title}</h2>
                            <p>{items.body}</p>
                            <p style={{ color: "#80808091", fontWeight: 500 }}>
                              Mon 21 Dec 2020 14:57 PM
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </>
                  </React.Fragment>
                </Grid>
              ))}
            </Grid>
          )}
          {showVerticalData && (
            <Grid container spacing={2}>
              {cardShow.map((items, index) => (
                <Grid item xs={4} key={index}>
                  <React.Fragment>
                    <>
                      <CardContent className="card">
                        <ClearIcon
                          onClick={(e) => deleteCard(e, items.id)}
                          style={{ float: "right", color: "red" }}
                        />
                        <div className="heading-title">
                          <h2>{items.title}</h2>
                          <p>{items.body}</p>
                        </div>
                        <p style={{ color: "#80808091", fontWeight: 500 }}>
                          Mon 21 Dec 2020 14:57 PM
                        </p>

                        <div style={{ height: "161px", maxHeight: "161px" }}>
                          <img
                            src="./imgcorporate.jpg"
                            style={{
                              width: "100%",
                            }}
                          />
                        </div>
                      </CardContent>
                    </>
                  </React.Fragment>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      )}
      <Pagination
        count={totalpages}
        className="nav-pagintation"
        page={currentPage}
        onChange={handlePageChange}
      />
    </div>
  );
}
