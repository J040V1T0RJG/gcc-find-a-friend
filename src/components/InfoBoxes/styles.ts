import styled from 'styled-components'

export const InfoBoxesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 32px;

  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 180px;
    height: 106px;
    padding-left: 26px;
    border: 2px solid rgba(13, 59, 102, 0.2);
    border-radius: 16px;

    p {
      margin-top: 8px;
    }

    .icons {
      img {
        margin-right: 8px;
      }
    }
  }
`
