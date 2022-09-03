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
    justify-content: space-between;
    align-items: center;
    padding-top: 10vh;
    padding-bottom: 5vh;

    button {
      border: none;
      background-color: var(--color-gray-3);
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--color-gray-0);
      padding: 10px 15px;
      border-radius: 4px;
      background-color: var(--color-gray-3);
    }

    button:hover {
      background-color: var(--color-gray-2);
    }
  }
  //Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }

  //Smartphone
  @media screen and (max-width: 767px) {
    padding: 4vw;

    nav {
      width: 100%;
      padding-top: 6vh;
      padding-bottom: 5vh;

      button {
        padding: 10px 40px;
      }
    }
  }
`;
