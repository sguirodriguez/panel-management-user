import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";
import moment from "moment";
import "dotenv/config";
import cors from "cors";

const app = express();

const port = process.env.PORT;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  app.use(cors());
  next();
});

app.use(bodyParser.json());
app.use(routes);
app.listen(port, () =>
  console.log(
    `🔥 Server started on port http://localhost:${port} at ${moment().format(
      "YYYY-MM-DD hh:mm:ss"
    )}`
  )
);
