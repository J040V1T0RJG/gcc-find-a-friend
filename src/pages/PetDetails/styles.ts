import styled from 'styled-components'

export const PetDetailsContainer = styled.div`
  margin: 6.75rem auto;

  width: 44rem;

  background: ${(props) => props.theme.white};
  border-radius: 20px;

  padding-left: 4.5rem;
  padding-right: 4.5rem;
  padding-bottom: 4.5rem;

  color: ${(props) => props.theme['blue-dark']};

  .contact {
    display: flex;
    flex-direction: row;

    gap: 1.125rem;

    margin-top: 2.5rem;
    padding-top: 3.5rem;
    border-top: 1px solid #d3e2e6;

    .logoOrange {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 4rem;
      height: 4rem;

      background: ${(props) => props.theme.yellow};
      border-radius: 15px;

      img {
        width: 1.75rem;
      }
    }

    .contactText {
      h2 {
        font-weight: 700;
        font-size: 30px;
        line-height: 90%;
        color: #0d3b66;
      }
      h3 {
        font-weight: 600;
        font-size: 1rem;
        line-height: 28px;
        color: #0d3b66;
        margin-top: 6px;
      }
      .whatsappContactBox {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        width: 13.5rem;
        height: 3.5rem;
        gap: 0.75rem;
        margin-top: 1rem;

        background: rgba(13, 59, 102, 0.05);
        border-radius: 10px;
      }
    }
  }

  .requirements {
    margin-top: 3.125rem;
    padding-top: 3.5rem;
    border-top: 1px solid #d3e2e6;
    .alertBoxes {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 2.5rem;

      .alert {
        display: flex;
        flex-direction: row;
        align-items: center;

        width: 100%;
        gap: 14px;
        padding-top: 1rem;
        padding-bottom: 1rem;
        padding-right: 1rem;
        padding-left: 2.5rem;

        background: linear-gradient(
          129.72deg,
          rgba(247, 95, 96, 0.1) 16.45%,
          rgba(241, 81, 86, 0) 67.3%
        );
        border: 1px solid ${(props) => props.theme.carnation};
        border-radius: 10px;

        img {
          width: 24px;
        }

        p {
          font-weight: 600;
          font-size: 1.125rem;
          line-height: 28px;

          color: ${(props) => props.theme.carnation};
        }
      }
    }
  }

  .whatsaap {
    border-top: 1px solid ${(props) => props.theme['blue-ligth']};
    margin-top: 3.125rem;
    padding-top: 3.125rem;

    button {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      width: 100%;
      height: 4rem;
      gap: 1rem;

      background: #3cdc8c;
      border-radius: 20px;
      border: none;

      p {
        font-weight: 800;
        font-size: 1.125rem;

        color: ${(props) => props.theme.white};
      }

      &:hover {
        opacity: 0.8;
      }
    }
  }
`
