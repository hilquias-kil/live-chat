import React from "react"
import styled from "styled-components"
import Paper from "@material-ui/core/Paper"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"

const PageHolder = styled.div`
  padding-top: 100px;

  .title {
    margin-bottom: 20px;
  }

  .field {
    width: 100%;
    margin-bottom: 20px;
  }
`

const Setup = () => {
  return (
    <PageHolder>
      <Container maxWidth="sm">
      <Paper elevation={3}>
        <div style={{ padding: 20 }}>
          <Typography variant="h4" className="title">
            Configuração de video
          </Typography>
          <Typography gutterBottom>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typography>
          <TextField
            className="field"
            required
            id="video_id"
            label="Video ID"
            placeholder="insira o id do video"
            variant="filled"
          />
          <Button variant="contained" color="primary">
            Iniciar
          </Button>
        </div>
      </Paper>
      </Container>
    </PageHolder>
  )
}

export default Setup
