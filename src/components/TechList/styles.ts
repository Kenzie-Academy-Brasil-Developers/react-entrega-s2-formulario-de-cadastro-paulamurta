import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  background-color: var(--color-gray-3);
  gap: 3vh;
  padding: 4vh;

  li {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3vh;
    background-color: var(--color-gray-4);
    border-radius: 4px;
    &:hover {
      background-color: var(--color-gray-2);
    }

    div {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 1vw;

      button {
        color: var(--color-gray-1);
        background-color: transparent;

        &:hover {
          color: var(--color-primary);
        }
      }
    }

    h3 {
      color: var(--color-white);
      font-size: 0.9rem;
      font-weight: 700;
    }

    p {
      color: var(--color-gray-1);
      font-size: 0.8rem;
      font-weight: 400;
    }
  }
  //Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }

  //Smartphone
  @media screen and (max-width: 767px) {
  }
`;
