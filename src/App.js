import ProfitLossComponent from "./Component/ProfitLossComponent";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { makeStyles, ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
    position: "absolute",
  },
});

function App() {
  const classes = useStyles();

  const theme = createTheme({});

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Header />
        <ProfitLossComponent />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
