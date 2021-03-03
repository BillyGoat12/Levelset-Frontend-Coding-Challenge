import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import catData from "../data";
import { Snackbar, makeStyles, Divider } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles({
  alertFormat: {
    position: "absolute",
    top: "0",
  },
});

const App = () => {
  const [cats, setCats] = useState(catData);
  const [search, setSearch] = useState("");
  const [view, setView] = useState({});
  const [open, setOpen] = useState(false);
  const [thumbnail, setThumbnail] = useState("");
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [owner, setOwner] = useState("");
  const [error, setError] = useState(false);

  const classes = useStyles();

  return (
    <div
      style={{
        width: window.innerWidth * 0.9,
        display: "flex",
        flexDirection: "row",
        height: window.innerHeight * 0.9,
      }}
    >
      <Snackbar
        open={open}
        className={classes.alertFormat}
        onClose={() => setOpen(!open)}
      >
        <Alert severity="info">
          {error ? (
            <div>
              <h3>Input for date is incorrect</h3>
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
                      !Number(test[2])
                    ) {
                      setError(true);
                    } else {
                      view.Name = name;
                      view.ThumbnailURL = thumbnail;
                      view.Birthdate = birth;
                      view.OwnerName = owner;
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
      <div
        style={{
          width: window.innerWidth * 0.25,
          display: "flex",
          flexDirection: "column",
          outlineColor: "black",
          outlineStyle: "solid",
          height: window.innerHeight * 0.9,
          overflow: "hidden",
          overflowY: "scroll",
        }}
      >
        <Card
          style={{
            outlineColor: "black",
            outlineStyle: "solid",
            height: window.innerHeight * 0.2,
            textAlign: "center",
          }}
        >
          <Card.Body
            style={{
              marginTop: "14%",
              marginBottom: "14%",
            }}
          >
            <input
              type="input"
              value={search}
              placeholder="Search for cats by name"
              onChange={(e) => setSearch(e.target.value)}
            />
          </Card.Body>
        </Card>

        {cats.map((cat, index) => {
          if (search.length) {
            if (cat.Name.toUpperCase().includes(search.toUpperCase())) {
              return (
                <Card
                  key={String(index)}
                  style={{
                    outlineColor: "black",
                    outlineStyle: "solid",
                    textAlign: "center",
                  }}
                  onClick={() => {
                    if (cat.Name === view.Name) {
                      setView({});
                    } else {
                      setView(cat);
                    }
                  }}
                >
                  <Card.Body>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginLeft: "25%",
                        marginTop: "5%",
                      }}
                    >
                      <Card.Img
                        variant="top"
                        src={cat.ThumbnailURL}
                        style={{
                          height: window.innerHeight * 0.06,
                          width: window.innerWidth * 0.06,
                        }}
                      />
                      <Card.Title style={{ marginTop: "5%", marginLeft: "5%" }}>
                        {cat.Name}
                      </Card.Title>
                    </div>
                    <Card.Text>{cat.Birthdate}</Card.Text>
                  </Card.Body>
                </Card>
              );
            }
          } else {
            return (
              <Card
                key={String(index)}
                style={{
                  outlineColor: "black",
                  outlineStyle: "solid",
                  textAlign: "center",
                }}
                onClick={() => {
                  if (cat.Name === view.Name) {
                    setView({});
                  } else {
                    setView(cat);
                  }
                }}
              >
                <Card.Body>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginLeft: "25%",
                      marginTop: "5%",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={cat.ThumbnailURL}
                      style={{
                        height: window.innerHeight * 0.06,
                        width: window.innerWidth * 0.06,
                      }}
                    />
                    <Card.Title style={{ marginTop: "5%", marginLeft: "5%" }}>
                      {cat.Name}
                    </Card.Title>
                  </div>
                  <Card.Text>{cat.Birthdate}</Card.Text>
                </Card.Body>
              </Card>
            );
          }
        })}
      </div>
      <div
        style={{
          width: window.innerWidth * 0.6,
          outlineColor: "black",
          outlineStyle: "solid",
          height: window.innerHeight * 0.9,
        }}
      >
        {view.Name ? (
          <div
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              marginTop: "6%",
            }}
          >
            <img
              src={view.ThumbnailURL}
              alt=""
              style={{
                width: window.innerWidth * 0.4,
                height: window.innerHeight * 0.4,
                marginLeft: "18%",
              }}
            />
            <p>{view.Name}</p>
            <p>{view.Birthdate}</p>
            <p>{view.OwnerName}</p>
            <p>{`Number of views: ${view.ViewsCount}`}</p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "80%",
              }}
            >
              <p style={{ marginLeft: "5%" }} onClick={() => setOpen(true)}>
                Edit
              </p>
              <p style={{ marginLeft: "5%" }}>|</p>
              <p
                style={{ marginLeft: "5%" }}
                onClick={() => {
                  cats.map((cat, index) => {
                    if (cat.Name === view.Name) {
                      cats.splice(index, 1);
                    }
                  });
                  setCats([...cats]);
                  setView({});
                }}
              >
                Delete
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default App;
