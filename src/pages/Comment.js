import React, { useEffect, useState } from "react"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Avatar from "@material-ui/core/Avatar"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import PageHolder from "../components/PageHolder"

const api_key = process.env.API_KEY
const client_id = process.env.CLIENT_ID

const Comment = () => {
  const [content, setContent] = useState([])
  const [comment, setComment] = useState({})

  const showComments = (id) => {
    setInterval(() => {
      window.gapi.client.youtube.liveChatMessages
        .list({
          liveChatId: id,
          part: "snippet, authorDetails",
        })
        .then(
          function (response) {
            // Handle the results here (response.result has the parsed body).
            setContent(JSON.parse(response.body).items)
          },
          function (err) {
            console.error("Execute error", err)
          },
        )
    }, 1000 * 10)
  }

  const getList = () => {
    window.gapi.client.youtube.liveBroadcasts
      .list({
        part: "snippet,contentDetails,status",
        broadcastType: "all",
        broadcastStatus: "active",
      })
      .then(
        function (response) {
          // Handle the results here (response.result has the parsed body).

          const data = JSON.parse(response.body)

          if (data.items.length) {
            showComments(data.items[0].snippet.liveChatId)
          }
        },
        function (err) {
          console.error("Execute error", err)
        },
      )
  }

  const setup = () => {
    window.gapi.auth2
      .getAuthInstance()
      .signIn({ scope: "https://www.googleapis.com/auth/youtube.readonly" })
      .then(() => {
        window.gapi.client.setApiKey(api_key)
        window.gapi.client
          .load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
          .then(
            function () {
              getList()
            },
            function (err) {
              console.error("Error loading GAPI client for API", err)
            },
          )
      })
  }

  const init = () => {
    window.gapi.load("client:auth2", () => {
      window.gapi.auth2.init({
        client_id: client_id
      })
      setup()
    })
  }

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "http://apis.google.com/js/api.js"
    script.onload = (e) => {
      init()
    }
    document.body.appendChild(script)
  }, [])
  return (
    <PageHolder>
      {console.log(content)}
      <div className="col">
        <List className="list-comments">
          {content.map((item) => (
            <ListItem
              key={item.id}
              button
              onClick={(e) => {
                setComment({
                  avatar: item?.authorDetails?.profileImageUrl,
                  name: item?.authorDetails?.displayName,
                  text: item?.snippet?.displayMessage,
                })
              }}
            >
              <ListItemAvatar>
                <Avatar
                  alt={item?.authorDetails?.displayName}
                  src={item?.authorDetails?.profileImageUrl}
                />
              </ListItemAvatar>
              <ListItemText
                primary={item?.authorDetails?.displayName}
                secondary={item?.snippet?.displayMessage}
              ></ListItemText>
            </ListItem>
          ))}
        </List>
      </div>
      <div className="col col-show">
        <Card>
          <CardContent className="holder">
            <Avatar src={comment?.avatar} />
            <div className="text-holder">
              <Typography component="h6" variant="h6">
                {comment?.name}
              </Typography>
              <Typography component="h5" variant="h5" color="textSecondary">
                {comment?.text}
              </Typography>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageHolder>
  )
}

export default Comment
