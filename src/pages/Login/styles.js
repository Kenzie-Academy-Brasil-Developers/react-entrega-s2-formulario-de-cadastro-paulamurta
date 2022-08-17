import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2vh;
  width: 100%;

  nav {
    width: 30vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10vh;
    padding-bottom: 5vh;
  }

  //Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }

  //Smartphone
  @media screen and (max-width: 767px) {
    padding: 4vw;

    nav {
      width: 100%;
      padding-top: 3vh;
      padding-bottom: 5vh;

      button {
        padding: 10px 40px;
      }
    }
  }
`;
