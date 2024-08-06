import React from "react";
import { useDispatch } from "react-redux";
import { showHorizonal, showVertical } from "../redux/action";
import "../style.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { Button } from "@mui/material";
const Sidebar = ({ onFeedbackButtonClick, showViewToggle }) => {
  const dispatch = useDispatch();
  const [horizonalCard, setHorizonalCard] = React.useState(false);
  const [verticalCard, setVerticalCard] = React.useState(true);
  const showCard = () => {
    setHorizonalCard(true);
    setVerticalCard(false);

    dispatch(showHorizonal(true));
    dispatch(showVertical(false));
  };
  const showCardVertical = () => {
    setVerticalCard(true);
    setHorizonalCard(false);

    dispatch(showVertical(true));
    dispatch(showHorizonal(false));
  };
  return (
    <>
      <div className="sidebar">
        <Card
          style={{
            margin: "12px",
            borderRadius: "26px",
          }}
        >
          <CardContent>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <img
                src="./imgavtar.png"
                style={{ width: "64px", height: "64px" }}
              />
              <div>
                <h3>Hi Reader ,</h3>
                <p style={{ marginTop: "-19px" }}>Here your News !</p>
              </div>
            </div>
          </CardContent>
          <CardActions></CardActions>
        </Card>

        <Card
          style={{
            margin: "12px",
            borderRadius: "26px",
          }}
        >
          <CardContent>
            <div className="container-file">
              <h2>View Toggle</h2>
              <div>
                <BrandingWatermarkIcon
                  className="btnFile"
                  onClick={showCardVertical}
                  style={{ fontSize: "37px" ,backgroundColor:!horizonalCard ?'#05c5058c':'lightgray'}}
                />
                <FormatListBulletedIcon
                  className="btnFile2"
                  onClick={showCard}
                  style={{ fontSize: "37px",backgroundColor:!verticalCard ?'#05c5058c':'lightgray' }}
                />
              </div>
            </div>
          </CardContent>
          <CardActions></CardActions>
        </Card>
        <Card
          style={{
            margin: "12px",
            borderRadius: "26px",
          }}
        >
          <CardContent>
            <div className="container-file">
              <h2>Feedback Toggle</h2>
              <div className="btn-feedback">
              <Button onClick={onFeedbackButtonClick}>We're Listening</Button>
              </div>
            </div>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </div>
    </>
  );
};

export default Sidebar;
