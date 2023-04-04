import express from "express";
import cors from "cors";
const app = express();
const port = 4377;
app.use(express.json());
app.use(cors({ origin: "*" }));
const lessons = [
  {
     topic:'Module 10',
     id:1,
     description:'Implementing an Adaptive User Interface',
     outcomes:['1','2','3']
   },
  {
     topic:'Module 2',
     id:2,
     description:'Creating Objects and Methods by Using JavaScript',
     outcomes:['44','88','12']
   },
  {
     topic:'Module 3',
     id:3,
     description:'physics',
     outcomes:['09','100','6']
   },
   {
    topic:'Module 4',
    id:4,
    description:'javascript',
    outcomes:['','','']
  },
  {
    topic:'Module 5',
    id:5,
    description:'DOM Manipulation',
    outcomes:['','','']
  },
  {
    topic:'Module 6',
    id:6,
    description:'Communicate to remote server',
    outcomes:['','','']
  }
 ]
app.get("/", (req, resp) => {
  resp.status(200).send({lessons: lessons });
});
app.listen(port, () => {
  console.log("Server running on port http://localhost:4377");
});


