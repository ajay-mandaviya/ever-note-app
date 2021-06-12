const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: "calc(100% - 35px)",
    position: "absolute",
    left: "0",
    boxShadow: "0px 0px 2px black",
  },
  editorContainer: {
    height: "100vh",
    width: "100%",
    boxSizing: "border-box",
  },
    editorHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#03203C",
  },
  titleInput: {
    height: "40px",
    boxSizing: "border-box",
    border: "none",
    padding: "5px",
    fontSize: "24px",
    width: "100%",
    color: "white",
    backgroundColor: "#03203C",
    paddingLeft: "50px",
  },
  editIcon: {
    position: "absolute",
    marginLeft: "1rem",
    top: "16px",
    color: "white",
    width: "10",
    height: "10",
  },
});

export default styles;
