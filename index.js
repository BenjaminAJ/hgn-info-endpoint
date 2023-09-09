const express = require('express')
const cors = require('cors')
const moment = require('moment')

const app = express()
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 5500;


app.get('/api/',(req,res)=>{    

    const {slack_name, track} = req.query;

     // Get the current day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const current_day = daysOfWeek[new Date().getDay()];

    const utc_time = moment().utc().format();
    

    const jsonResponse = {
        slack_name,
        current_day,
        utc_time,
        track,
        github_file_url: "https://github.com/BenjaminAJ/hgn-info-endpoint/blob/main/index.js",
        github_repo_url: "https://github.com/BenjaminAJ/hgn-info-endpoint",
        status_code: 200
    }
    res.status('200').json(jsonResponse)
})

app.listen(port, (req,res)=>{
    console.log('Server is listening on port ' + port);
})