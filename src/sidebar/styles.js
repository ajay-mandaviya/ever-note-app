const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: "calc(100% - 35px)",
    position: "absolute",
    left: "0",
    top: "0",
    width: "300px",
    boxShadow: "0px 0px 2px black",
  },
  newNoteBtn: {
    width: "100%",
    height: "35px",
    borderRadius: "1px",
    color: "white",
    backgroundColor: "#03203C",
    borderBottom: "1px solid Black",
    "&:hover": {
      backgroundColor: "#011222",
    },
  },
  sidebarContaier: {
    marginTop: "0px",
    width: "300px",
    height: "100%",
    boxSizing: "border-box",
    overflowY: "scroll",
  },
  newNoteInput: {
    width: "100%",
    height: "35px",
    margin: " 0px",
    outline: "none",
    paddingLeft: "5px",
    "&:focus": {
      outline: "2px solid #011222",
    },
  },
  newNoteSubmitBtn: {
    width: "100%",
    backgroundColor: "#03203C",
    borderRadius: "0px",
    color: "white",
    transition: "all 0.3 linear",
    "&:hover": {
      backgroundColor: "#011222",
    },
  },
});

export default styles;
