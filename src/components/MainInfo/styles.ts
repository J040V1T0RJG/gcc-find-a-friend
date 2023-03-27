import styled from 'styled-components'

export const MainInfoContainer = styled.div`
  margin-top: 4.5rem;

  h1 {
    font-weight: 800;
    font-size: 3.5rem;
    line-height: 90%;
    letter-spacing: -0.02em;
  }

  h3 {
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 28px;
    margin-top: 1.625rem;
  }
`

export const InfoBoxesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2rem;

  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 11.25rem;
    height: 6.5rem;
    padding-left: 1.625rem;
    border: 2px solid rgba(13, 59, 102, 0.2);
    border-radius: 16px;

    p {
      margin-top: 0.5rem;
    }

    .icons {
      img {
        margin-right: 0.5rem;
      }
    }
  }
`
