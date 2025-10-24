import Link from "next/link";

export default function Home() {

  const titleStyle = {
    fontFamily: "var(--font-pressstart2p), sans-serif",
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  };
  return (
    <>

      <div style={pageStyle}>
        <h1 style={titleStyle}>CPRG 306: Web Development 2 - Assignments - Lyub</h1>
        <div style={houseStyle}>
          <div style={wallStyleTop}></div>
          <div style={wallStyleRight}></div>
          <div style={wallStyleBottom}></div>
          <div style={wallStyleLeft}></div>

          <div style={roomsContainerStyle}>
            <Room link="/week-2" label="Week 2" />
            <Room link="/week-3" label="Week 3" />
            <Room link="/week-4" label="Week 4" />
            <Room link="/week-5" label="Week 5" />
            <Room link="/week-6" label="Week 6" />


          </div>
        </div>
      </div>
    </>
  );
}

function Room({ link, label }) {
  return (
    <Link href={link} style={roomStyle}>
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <div style={wallStyleTopSmall}></div>
        <div style={wallStyleRightSmall}></div>
        <div style={wallStyleBottomSmall}></div>
        <div style={wallStyleLeftSmall}></div>
        <span style={labelStyle}>{label}</span>
      </div>
    </Link>
  );
}

const pageStyle = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  justifyContent: "flex-end",
  padding: 20,
};

const houseStyle = {
  position: "relative",
  width: 1200,
  height: 600,
  margin: "0 auto",
  backgroundColor: "transparent",
  padding: 20,
  boxSizing: "border-box",
};

const roomsContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "15px",
  width: "100%",
  height: "calc(100% - 40px)",
  paddingTop: 20,
  boxSizing: "border-box",
  position: "relative",
  zIndex: 1,
  justifyContent: "start",
  alignContent: "flex-start",
};


const wallBase = {
  backgroundColor: "black",
  border: "3px solid white",
  boxSizing: "border-box",
  position: "absolute",
  borderStyle: "solid",
  borderColor: "white",
  filter: "drop-shadow(1px 1px 0 white) drop-shadow(-1px -1px 0 white)",
};

const wallStyleTop = {
  ...wallBase,
  top: 0,
  left: 0,
  width: "100%",
  height: 20,
  borderRadius: "4px 4px 0 0",
};

const wallStyleRight = {
  ...wallBase,
  top: 0,
  right: 0,
  width: 20,
  height: "100%",
  borderRadius: "0 4px 4px 0",
};

const wallStyleBottom = {
  ...wallBase,
  bottom: 0,
  left: 0,
  width: "100%",
  height: 20,
  borderRadius: "0 0 4px 4px",
};

const wallStyleLeft = {
  ...wallBase,
  top: 0,
  left: 0,
  width: 20,
  height: "100%",
  borderRadius: "4px 0 0 4px",
};

const smallWallBase = {
  ...wallBase,
  borderWidth: 2,
};

const wallStyleTopSmall = {
  ...smallWallBase,
  top: 0,
  left: 0,
  width: "100%",
  height: 10,
  borderRadius: "3px 3px 0 0",
  position: "absolute",
};

const wallStyleRightSmall = {
  ...smallWallBase,
  top: 0,
  right: 0,
  width: 10,
  height: "100%",
  borderRadius: "0 3px 3px 0",
  position: "absolute",
};

const wallStyleBottomSmall = {
  ...smallWallBase,
  bottom: 0,
  left: 0,
  width: "100%",
  height: 10,
  borderRadius: "0 0 3px 3px",
  position: "absolute",
};

const wallStyleLeftSmall = {
  ...smallWallBase,
  top: 0,
  left: 0,
  width: 10,
  height: "100%",
  borderRadius: "3px 0 0 3px",
  position: "absolute",
};

const roomStyle = {
  position: "relative",
  display: "block",
  width: 100,
  height: 100,
  backgroundColor: "transparent",
  cursor: "pointer",
  color: "white",
  fontWeight: "bold",
  fontSize: 14,
  textDecoration: "none",
  userSelect: "none",
};

const labelStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  pointerEvents: "none",
  fontFamily: "var(--font-pressstart2p), sans-serif",
  fontSize: 8,
  color: "#fff",
};