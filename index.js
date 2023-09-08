const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 5500;


app.get('/api/',(req,res)=>{    

    const {slack_name, track} = req.query;
    const jsonResponse = {
        slack_name,
        current_day: "Monday",
        utc_time: "2023-08-21T15:04:05Z",
        track,
        github_file_url: "https://github.com/username/repo/blob/main/file_name.ext",
        github_repo_url: "https://github.com/username/repo",
        status_code: 200
    }
    res.status('200').json(jsonResponse)
})

app.listen(port, (req,res)=>{
    console.log('Serveris listening on port ' + port);
})