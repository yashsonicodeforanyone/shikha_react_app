import { Grid } from "@mui/material";
import "./App.css";
import MainPage from "./components/MainPage";
import Sidebar from "./components/Sidebar";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { cardData } from "./redux/action";
import axios from "axios";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  const fetchCardData = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await axios.get(url);
    setData(response.data);
    dispatch(cardData(response.data));
    setLoading(false);
  };
  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetchCardData();
    }, 5000);
  }, []);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [showViewToggle, setShowViewToggle] = useState(true);

  const handleFeedbackButtonClick = () => {
    setShowFeedbackForm(true);
    setShowViewToggle(false);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Sidebar onFeedbackButtonClick={handleFeedbackButtonClick} />
        </Grid>
        <Grid item xs={8}>
          {showFeedbackForm ? (
            <FeedbackForm />
          ) : (
            <MainPage
              data={data}
              setData={setData}
              loading={loading}
              setLoading={setLoading}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default App;
