const express=require('express')
const router=express.Router()
const Person= require('./../models/person')
router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    res.status(201).json(response);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/',async (req,res)=>{
  try {
    // 1. Get the data from the body (e.g., { "work": "chef" })
    const filter = req.body; 

    // 2. Pass that object directly into the find method
    // If body is { "work": "chef" }, this becomes Person.find({ "work": "chef" })
    const data = await Person.find(filter);

    // 3. Check if we actually found anyone
    if (data.length === 0) {
        return res.status(404).json({ message: "No matching records found" });
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

//comment added 
module.exports=router