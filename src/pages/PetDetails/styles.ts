import styled from 'styled-components'

export const PetDetailsContainer = styled.div`
  margin: 108px auto;

  width: 704px;
  height: 2035px;

  background: ${(props) => props.theme.white};
  border-radius: 20px;

  padding-left: 72px;
  padding-right: 72px;
  padding-bottom: 72px;

  color: ${(props) => props.theme['blue-dark']};

  .contact {
    display: flex;
    flex-direction: row;

    gap: 18px;

    margin-top: 40px;
    padding-top: 55px;
    border-top: 1px solid #d3e2e6;

    .logoOrange {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 64px;
      height: 64px;

      background: #f27006;
      border-radius: 15px;

      img {
        width: 28px;
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
        font-size: 16px;
        line-height: 28px;
        color: #0d3b66;
        margin-top: 6px;
      }
      .whatsappContactBox {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        width: 216px;
        height: 54px;
        gap: 12px;
        margin-top: 16px;

        background: rgba(13, 59, 102, 0.05);
        border-radius: 10px;
      }
    }
  }

  .requirements {
    margin-top: 50px;
    padding-top: 55px;
    border-top: 1px solid #d3e2e6;
    .alertBoxes {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 40px;

      .alert {
        display: flex;
        flex-direction: row;
        align-items: center;

        width: 100%;
        gap: 14px;
        padding-top: 16px;
        padding-bottom: 16px;
        padding-right: 16px;
        padding-left: 40px;

        background: linear-gradient(
          129.72deg,
          rgba(247, 95, 96, 0.1) 16.45%,
          rgba(241, 81, 86, 0) 67.3%
        );
        border: 1px solid #f15156;
        border-radius: 10px;

        img {
          width: 24px;
        }

        p {
          font-weight: 600;
          font-size: 18px;
          line-height: 28px;

          color: #f15156;
        }
      }
    }
  }

  .whatsaap {
    border-top: 1px solid #d3e2e6;
    margin-top: 50px;
    padding-top: 50px;

    button {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      width: 100%;
      height: 64px;
      gap: 16px;

      background: #3cdc8c;
      border-radius: 20px;
      border: none;

      p {
        font-weight: 800;
        font-size: 18px;

        color: #ffffff;
      }

      &:hover {
        opacity: 0.8;
      }
    }
  }
`
