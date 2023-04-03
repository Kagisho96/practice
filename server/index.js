import express from "express";
import cors from "cors";
const app = express();
const port = 4377;
app.use(express.json());
app.use(cors({ origin: "*" }));
const lessons = [
  {
     topic:'Module 1',
     id:1,
     description:'lorem',
     outcomes:['1','2','3']
   },
  {
     topic:'Module 2',
     id:1,
     description:'maths',
     outcomes:['44','88','12']
   },
  {
     topic:'Module 3',
     id:1,
     description:'physics',
     outcomes:['09','100','6']
   },
 ]
app.get("/", (req, resp) => {
  resp.status(200).send({ message: "Voilor!", lessons: lessons });
});
app.listen(port, () => {
  console.log("Server running on port http://localhost:4377");
});

