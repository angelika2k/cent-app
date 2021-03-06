import React from "react";
import Grid from "@material-ui/core/Grid";
import { TutorialName } from "./StudentViewCenter/TutorialName";
import { TutoryLeftBar } from "./StudentViewCenter/TutoryLeftBar";
import { MyChatRightBar } from "./MyChat/MyChatRightBar";

export const StudentViewClassPersonal = () => {
  const style = {
    paddingTop: "50px",
    height: "95vh",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  };

  return (
    <div style={style}>
      <Grid container>
        <Grid item xs={12}>
          <h3>Class</h3>
        </Grid>
        {/* <Grid item xs={3}>
                    <a href="/">
                        <TutorialName />
                    </a>
                </Grid>
                <Grid item xs={3}>
                    <a href="/class">
                        <h3>Class</h3>
                    </a>
                </Grid>
                <Grid item xs={3}>
                    <h3>Personal</h3>
                </Grid>
                <Grid item xs={3}>
                    <h3>Group</h3>
                </Grid> */}
      </Grid>
      <Grid container>
        <Grid item xs={3}>
          <TutoryLeftBar />
        </Grid>
        <Grid item xs={9}>
          <MyChatRightBar />
        </Grid>
      </Grid>
    </div>
  );
};
