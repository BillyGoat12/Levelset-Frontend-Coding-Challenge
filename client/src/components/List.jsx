import React, { useState } from "react";
import { Card } from "react-bootstrap";
// component for the the left side view with the list when edit is clicked
const List = ({ cats, view, setView }) => {
  const [search, setSearch] = useState("");

  return (
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
                  cat.ViewsCount++;
                  cats[cat.ID] = cat;
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
  );
};

export default List;
