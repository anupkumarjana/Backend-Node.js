require("dotenv").config();

const express = require("express");
const app = express();

const gihubData = {
  login: "anupkumarjana",
  id: 91030891,
  node_id: "MDQ6VXNlcjkxMDMwODkx",
  avatar_url: "https://avatars.githubusercontent.com/u/91030891?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/anupkumarjana",
  html_url: "https://github.com/anupkumarjana",
  followers_url: "https://api.github.com/users/anupkumarjana/followers",
  following_url:
    "https://api.github.com/users/anupkumarjana/following{/other_user}",
  gists_url: "https://api.github.com/users/anupkumarjana/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/anupkumarjana/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/anupkumarjana/subscriptions",
  organizations_url: "https://api.github.com/users/anupkumarjana/orgs",
  repos_url: "https://api.github.com/users/anupkumarjana/repos",
  events_url: "https://api.github.com/users/anupkumarjana/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/anupkumarjana/received_events",
  type: "User",
  site_admin: false,
  name: "Anup Kumar Jana",
  company: null,
  blog: "anupz.dev",
  location: null,
  email: null,
  hireable: null,
  bio: "Hi, I'm an SDE at MountBlue.",
  twitter_username: null,
  public_repos: 42,
  public_gists: 1,
  followers: 2,
  following: 5,
  created_at: "2021-09-19T19:49:01Z",
  updated_at: "2024-09-16T06:34:04Z",
};

app.get("/", (req, res) => {
  try {
    res.send("Hi, this is the response");
  } catch {
    res.status(500).send("Internal Server Error");
  }
});

app.get("/twitter", (req, res) => {
  try {
    res.send("This is the Twitter response");
  } catch (err) {
    console.log(err);
  }
});

app.get("/login", (req, res) => {
  try {
    res.send("<h1>Hi this is a login page<h1/>");
  } catch (err) {
    console.log(err);
  }
});

// making api

app.get("/github-api", (req, res) => {
  try {
    res.json(gihubData);
  } catch (err) {
    console.log(err);
  }
});

app.listen(process.env.PORT, () => {
  console.log(`The port is running on ${process.env.PORT}`);
});
