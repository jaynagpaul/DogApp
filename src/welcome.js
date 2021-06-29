import dog from "./images/loadingdog.gif";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
export default function Welcome(props) {
  return (
    <>
      <img
        style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
        src={dog}
        alt=""
      />
      <Typography
        style={{
          textAlign: "center",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto"
        }}
        variant="h3"
        gutterBottom
      >
        Myos Dog Tracker
      </Typography>
      <Button
        style={{
          marginTop: "200px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto"
        }}
        onClick={() => props.setval(0)}
        variant="contained"
        color="primary"
      >
        Start Tracking
      </Button>
    </>
  );
}
