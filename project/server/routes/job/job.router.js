const router = require("express").Router();
const JobService = require("../../services/job.service");

router.get("/", (req, res) => {
  JobService.getAll()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ err: true, message: err });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  JobService.getById(id)
    .then((data) => {
      if(!data){
        res.status(404).json({err : true, message: "job not found"});
      } else {
        res.status(200).json(data);
      }
    })
    .catch((err) => {
      res.status(500).json({ err: true, message: err });
    });
});
module.exports = router;
