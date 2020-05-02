import styled from "styled-components"

const PageHolder = styled.div`
  padding-top: 100px;
  display: flex;

  .col {
    width: 50%;
    height: calc(100vh - 100px);
    padding: 20px;
    box-sizing: border-box;

    .holder {
      display: flex;
    }

    .text-holder {
      margin-left: 20px;
    }

    &.col-show {
      background-color: #00ff00;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 100px;
    }
  }

  .list-comments {
    overflow: auto;
    max-height: 100%;
  }
`

export default PageHolder
