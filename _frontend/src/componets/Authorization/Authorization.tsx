import { Button } from "@mui/material";
import classes from "./Authorization.module.css";

const Authorization = () => {
  return (
    <div
      style={{
        height: "70vh",
        width: "100vw",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        zIndex: 1,
        transition: "0.5s",
      }}
    >
      <div className={classes.Login_Window}>
        <input className={classes.input} type="text" placeholder="Login" />
        <input type="password" placeholder="Password" />
        <div className="Button_Container" style={{ display: "flex" }}>
          <Button
            className={classes.submit}
            variant="contained"
            type="submit"
            sx={{
              color: "white",
              //   bgcolor: "ButtonHighlight",
              padding: "5px",
              margin: "5px",
            }}
          >
            Увійти
          </Button>
          <Button
            className={classes.submit}
            variant="outlined"
            type="submit"
            sx={{
              color: "white",
              bgcolor: "green",
              padding: "5px",
              margin: "5px",
            }}
          >
            Зареєструватися
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Authorization;
