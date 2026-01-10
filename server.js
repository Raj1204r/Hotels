const express = require('express');
const app = express();
const db = require('./db');
const Person = require('./models/person');
const bodyParser=require('body-parser')
const Menu=require('./models/menu');




app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to my hotel...How can I help you?');
});

//Import the router files
const personRoutes=require('./Routes/personRoutes')
app.use('/person',personRoutes)


app.post('/addmenu',async (req,res)=>{
  try{
    const data=req.body

    const newMenu= new Menu(data)
    const response = await newMenu.save()
    res.status(201).json(response)
  }
  catch(err){
    res.status(500).json({error:'Internal server error'})
  }
})

app.listen(3000, () => console.log('🚀 Server running on 3000'));
