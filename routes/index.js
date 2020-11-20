var express = require('express');
var router = express.Router();
let csvToJson = require('convert-csv-to-json');
const csv=require('csvtojson')
const multer = require('multer');
const upload = multer();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs', { title: 'Express' });
});

router.post('/converToJson',upload.single('csvFile'),function (req,res,next) {
  try {
    console.log("req==============>>",req.file);

  // const csvFile = req.file.buffer.toString();
  // const rows = csvFile.split('\n');

  // for (let row of rows) {
  //   const columns = row.replace(/"/g, '').split(',');
  //   console.log(columns);
  // }

  


csv({
  noheader:true,
  output: "csv"
})
.fromString(req.file.buffer.toString())
.then((csvRow)=>{ 
  console.log(csvRow) 
})
 res.sendStatus(200);
  } catch (error) {
    res.sendStatus(401);
  }
  
})

module.exports = router;


