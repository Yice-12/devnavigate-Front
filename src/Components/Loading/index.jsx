import { CircularProgress } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  loadingContainer: {
    position: "fixed",
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    zIndex: "2",
  },
});

export const Loading = () => {
  const classes = useStyles();

  return (
    <div className={classes.loadingContainer}>
      <CircularProgress />
    </div>
  );
};
