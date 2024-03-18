require('dotenv').config()

const express = require('express')

const app = express()

const port = 4000

const github={
  "login": "Manish-S0",
  "id": 106476756,
  "node_id": "U_kgDOBli01A",
  "avatar_url": "https://avatars.githubusercontent.com/u/106476756?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Manish-S0",
  "html_url": "https://github.com/Manish-S0",
  "followers_url": "https://api.github.com/users/Manish-S0/followers",
  "following_url": "https://api.github.com/users/Manish-S0/following{/other_user}",
  "gists_url": "https://api.github.com/users/Manish-S0/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Manish-S0/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Manish-S0/subscriptions",
  "organizations_url": "https://api.github.com/users/Manish-S0/orgs",
  "repos_url": "https://api.github.com/users/Manish-S0/repos",
  "events_url": "https://api.github.com/users/Manish-S0/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Manish-S0/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Manish",
  "company": null,
  "blog": "",
  "location": "Earth",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 6,
  "public_gists": 0,
  "followers": 1,
  "following": 1,
  "created_at": "2022-05-29T12:57:34Z",
  "updated_at": "2023-12-30T08:02:17Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
  res.send('welcome to my website')
})

app.get('/github', (req, res) => {
  res.json(github)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})