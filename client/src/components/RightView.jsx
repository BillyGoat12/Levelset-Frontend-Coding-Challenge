import React from "react";
// component for the right side view to show more deatils when edit is clicked
const RightView = ({ cats, setCats, view, setView, setOpen }) => {
  return (
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
                    cats.map((cat) => cat.ID--);
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
  );
};

export default RightView;
