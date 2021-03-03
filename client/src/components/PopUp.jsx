import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Snackbar, makeStyles, Divider } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles({
  alertFormat: {
    position: "absolute",
    top: "0",
  },
});
// component for the pop up when edit is clicked
const PopUP = ({ cats, open, setOpen, view }) => {
  const [thumbnail, setThumbnail] = useState("");
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [owner, setOwner] = useState("");
  const [error, setError] = useState(false);

  const classes = useStyles();

  return (
    <Snackbar
      open={open}
      className={classes.alertFormat}
      onClose={() => setOpen(!open)}
    >
      <Alert severity="info">
        {error ? (
          <div>
            <h3>Input for date is incorrect</h3>
            <h3>or name is invalid</h3>
            <button onClick={() => setError(false)}>Okay</button>
          </div>
        ) : (
          <div>
            <h3>
              Edit Cat
              <Divider />
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p>Thumbnail URL</p>
                <p>Name</p>
                <p>Birth date</p>
                <p>Owner</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "10%",
                }}
              >
                <input
                  type="input"
                  value={thumbnail}
                  onChange={(e) => setThumbnail(e.target.value)}
                  style={{ marginTop: "10%" }}
                />
                <input
                  type="input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ marginTop: "25%" }}
                />
                <input
                  type="input"
                  value={birth}
                  placeholder="YYYY-MM-DD"
                  onChange={(e) => setBirth(e.target.value)}
                  style={{ marginTop: "15%" }}
                />
                <input
                  type="input"
                  value={owner}
                  onChange={(e) => setOwner(e.target.value)}
                  style={{ marginTop: "15%" }}
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "50%",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ height: "20px", marginTop: "10%" }}
                onClick={() => {
                  let test = birth.split("-");
                  if (
                    test.length !== 3 ||
                    !Number(test[0]) ||
                    !Number(test[1]) ||
                    !Number(test[2]) ||
                    name === ""
                  ) {
                    setError(true);
                  } else {
                    view.Name = name;
                    view.ThumbnailURL = thumbnail;
                    view.Birthdate = birth;
                    view.OwnerName = owner;
                    view.ViewsCount = 0;
                    cats[view.ID] = view;
                    setOpen(false);
                    setThumbnail("");
                    setName("");
                    setBirth("");
                    setOwner("");
                  }
                }}
              >
                Save
              </Button>
              <p style={{ marginLeft: "5%", marginRight: "5%" }}>|</p>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ height: "20px", marginTop: "10%" }}
                onClick={() => {
                  setOpen(false);
                  setThumbnail("");
                  setName("");
                  setBirth("");
                  setOwner("");
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        )}
      </Alert>
    </Snackbar>
  );
};

export default PopUP;
