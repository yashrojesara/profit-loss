import * as React from "react";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    marginTop: "2em",
    flexDirection: "column",
    alignItems: "center",
  },
  text: {
    maxWidth: "50%",
    textAlign: "center",
    marginTop: "1em",
    fontWeight: "bold",
  },
  error: {
    maxWidth: "50%",
    textAlign: "center",
    marginTop: "1em",
    fontWeight: "bold",
    color: "red",
  },
});

function ProfitLossComponent() {
  const classes = useStyles();

  const [isButtonCLicked, setIsButtonClicked] = React.useState(false);
  const [isProfit, setIsProfit] = React.useState(false);
  const [initialPrice, setInitialPrice] = React.useState(0);
  const [currentPrice, setCurrentPrice] = React.useState(0);
  const [qty, setQty] = React.useState(0);
  const [profitLoss, setProfitLoss] = React.useState(0);
  const [profitLossPercentage, setProfitLossPercentage] = React.useState(0);

  const [error, setError] = React.useState();

  const onClick = () => {
    validations();
    setIsButtonClicked(true);
    findProfitLoss();
  };

  const validations = () => {
    if (initialPrice === 0 || currentPrice === 0 || qty === 0) {
      setError("Please fill all the fields");
    } else {
      setError();
    }
  };

  const findProfitLoss = () => {
    const difference = currentPrice - initialPrice;
    const profitLossPercentage = (difference / initialPrice) * 100;

    setIsProfit(difference > 0);
    setProfitLoss(Math.abs(difference * qty));
    setProfitLossPercentage(Math.abs(profitLossPercentage.toFixed(2)));
  };

  return (
    <div className={classes.root}>
      <Typography
        variant="h6"
        className={classes.text}
        style={{ marginBottom: "1em" }}
      >
        Enter Your Stock Purchase Values in below fields to get the profit/loss
        report of your stock purchase.
      </Typography>

      <TextField
        style={{ margin: "1em 0em", minWidth: "16em" }}
        value={initialPrice}
        onChange={(e) => setInitialPrice(e.target.value)}
        type="number"
        variant="outlined"
        label="Entry Price"
      />

      <TextField
        style={{ margin: "1em 0em", minWidth: "16em" }}
        value={currentPrice}
        onChange={(e) => setCurrentPrice(e.target.value)}
        type="number"
        variant="outlined"
        label="Current Price"
      />

      <TextField
        style={{ margin: "1em 0em", minWidth: "16em" }}
        value={qty}
        onChange={(e) => setQty(e.target.value)}
        type="number"
        variant="outlined"
        label="Qty"
      />

      <Button onClick={onClick} variant="contained" color="primary">
        Check
      </Button>

      {isButtonCLicked && (
        <>
          {error ? (
            <span className={classes.error}>{error}</span>
          ) : (
            <span className={classes.text}>
              {profitLoss === 0
                ? "You are not making any profit or loss"
                : `${"You are in "}${
                    isProfit ? "profit" : "loss"
                  } of ₹${profitLoss} (${profitLossPercentage}%) ${
                    isProfit ? "🤩🤩🤩" : "😐😐😐"
                  }`}
            </span>
          )}
        </>
      )}
    </div>
  );
}

export default ProfitLossComponent;
