/**
 * Created by ravi.hamsa on 7/16/16.
 */
var express = require('express');
var cookieParser = require('cookie-parser')
var app = express();
app.use(cookieParser())


var proxy = require('express-http-proxy');

app.use('/api', proxy('localhost:8080'));

app.use(express.static('public'));


var dummyData = [{
  "id": "current_user_url",
  "name": "https://api.github.com/user"
}, {
  "id": "current_user_authorizations_html_url",
  "name": "https://github.com/settings/connections/applications{/client_id}"
}, {
  "id": "authorizations_url",
  "name": "https://api.github.com/authorizations"
}, {
  "id": "code_search_url",
  "name": "https://api.github.com/search/code?q={query}{&page,per_page,sort,order}"
}, {
  "id": "emails_url",
  "name": "https://api.github.com/user/emails"
}, {
  "id": "emojis_url",
  "name": "https://api.github.com/emojis"
}, {
  "id": "events_url",
  "name": "https://api.github.com/events"
}, {
  "id": "feeds_url",
  "name": "https://api.github.com/feeds"
}, {
  "id": "followers_url",
  "name": "https://api.github.com/user/followers"
}, {
  "id": "following_url",
  "name": "https://api.github.com/user/following{/target}"
}, {
  "id": "gists_url",
  "name": "https://api.github.com/gists{/gist_id}"
}, {
  "id": "hub_url",
  "name": "https://api.github.com/hub"
}, {
  "id": "issue_search_url",
  "name": "https://api.github.com/search/issues?q={query}{&page,per_page,sort,order}"
}, {
  "id": "issues_url",
  "name": "https://api.github.com/issues"
}, {
  "id": "keys_url",
  "name": "https://api.github.com/user/keys"
}, {
  "id": "notifications_url",
  "name": "https://api.github.com/notifications"
}, {
  "id": "organization_repositories_url",
  "name": "https://api.github.com/orgs/{org}/repos{?type,page,per_page,sort}"
}, {
  "id": "organization_url",
  "name": "https://api.github.com/orgs/{org}"
}, {
  "id": "public_gists_url",
  "name": "https://api.github.com/gists/public"
}, {
  "id": "rate_limit_url",
  "name": "https://api.github.com/rate_limit"
}, {
  "id": "repository_url",
  "name": "https://api.github.com/repos/{owner}/{repo}"
}, {
  "id": "repository_search_url",
  "name": "https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}"
}, {
  "id": "current_user_repositories_url",
  "name": "https://api.github.com/user/repos{?type,page,per_page,sort}"
}, {
  "id": "starred_url",
  "name": "https://api.github.com/user/starred{/owner}{/repo}"
}, {
  "id": "starred_gists_url",
  "name": "https://api.github.com/gists/starred"
}, {
  "id": "team_url",
  "name": "https://api.github.com/teams"
}, {
  "id": "user_url",
  "name": "https://api.github.com/users/{user}"
}, {
  "id": "user_organizations_url",
  "name": "https://api.github.com/user/orgs"
}, {
  "id": "user_repositories_url",
  "name": "https://api.github.com/users/{user}/repos{?type,page,per_page,sort}"
}, {
  "id": "user_search_url",
  "name": "https://api.github.com/search/users?q={query}{&page,per_page,sort,order}"
}]


app.get('/backend/api/v1/dummydata',function(req, resp){
  resp.send(JSON.stringify(dummyData))
})

app.listen(8090, function () {
  console.log('React app listening on port 8090!');
});
