import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background-color: var(--color-background);

  //Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }

  //Smartphone
  @media screen and (max-width: 767px) {
  }
`;

export const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: var(--color-background);
  padding: 7vh 20vw;
  border-bottom: 1px solid var(--color-gray-2);

  h2 {
    font-size: 1.1rem;
    color: var(--color-gray-0);
    font-weight: 700;
  }

  p {
    font-size: 0.8rem;
    color: var(--color-gray-1);
    font-weight: 600;
  }

  //Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }

  //Smartphone
  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 5vh 3vh;
    gap: 3vh;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  background-color: var(--color-background);
  padding: 7vh 20vw 0 20vw;
  gap: 5vh;

  h2 {
    font-size: 1.1rem;
    color: var(--color-gray-0);
    font-weight: 700;
  }

  p {
    color: var(--color-gray-1);
    font-weight: 400;
  }

  //Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }

  //Smartphone
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
