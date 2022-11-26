const router = require("express").Router();
const { check } = require("express-validator");
const service = require("../../services/reported/reported");

router.post(
    "/addreport",

    async (req, res) => {
      try {
        req.validate();
  
  
  
        //  await service.onInsert(req.body)  
        res.json({ message:  await service.onInsert(req.body)  });


      } catch (err) {
        res.error(err);
      }
    }
  );
  

  
router.get("/byIDs", [], async (req, res) => {
    try {
      console.log("param",req.query.id)
      const items = await service.findOne(req.query.id);
      res.json(items);
    } catch (err) {
      res.error(err);
    }
  });
  
  
  router.get("/", [], async (req, res) => {
    try {
      const items = await service.findAll();
      //console.log(items)
      res.json(items);
    } catch (err) {
      res.error(err);
    }
  });
  
module.exports = router;