const express=require('express')
const app= express()
const port=process.env.PORT || 3000

app.set('view engine', 'hbs')

const path=require("path")
const viewsDirectory=path.join(__dirname,'../temp/views')
app.set("views", viewsDirectory )

var hbs=require("hbs")
const partialsPath= path.join(__dirname,'../temp/partials')
hbs.registerPartials(partialsPath)

const publicDirectory=path.join(__dirname,'../public')
app.use(express.static(publicDirectory
))

app.get('/',(req,res)=>{
    res.render('index',{
        message : "Welcome to our website"
    })
})

app.get('/check_weather',(req,res)=>{
    res.render('check_weather',{
        country : "egypt",
        latitude : "27.56574543",
        longitude : "29.42038543",
        weather : "sunny",
        temp : "38"
    })
})

app.listen(port,()=>{
    console.log(`u r connected to port ${port}`)
})





