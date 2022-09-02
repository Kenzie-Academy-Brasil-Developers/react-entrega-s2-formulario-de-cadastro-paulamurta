import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;

  //Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }

  //Smartphone
  @media screen and (max-width: 767px) {
  }
`;

export const Content = styled.div`
  position: relative;
  min-width: 30vw;
  max-height: 50vh;
  background: var(--color-white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  section {
    padding: 3vh;
    width: 100%;
    background-color: var(--color-gray-2);
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      color: var(--color-gray-0);
      font-weight: 700;
      font-size: 0.9rem;
    }

    button {
      background-color: transparent;
      color: var(--color-gray-1);
      font-weight: 700;
      font-size: 0.9rem;

      &:hover {
        color: var(--color-gray-0);
      }
    }
  }

  form {
    padding: 3vh;
    width: 100%;
    background-color: var(--color-gray-3);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 3vh;

    fieldset {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 1.5vh;

      label {
        color: var(--color-gray-0);
        font-size: 0.8rem;
        font-weight: 400;
      }

      input,
      select {
        width: 100%;
        height: 45px;
        background-color: var(--color-gray-2);
        color: var(--color-gray-0);
        outline: 0;
        border: none;
        border-radius: 4px;
        padding: 0 1vw;
      }

      input::placeholder {
        color: var(--color-gray-1);
        font-weight: 400;
      }

      p {
        color: var(--color-negative);
        font-size: 0.75rem;
        font-weight: 400;
      }

      select:focus > option:checked {
        background-color: var(--color-gray-3);
      }
    }

    button {
      width: 100%;
      height: 40px;
      font-weight: 500;
      border: none;
      background-color: var(--color-primary);
      color: var(--color-gray-0);
      border-radius: 4px;
    }

    button:hover {
      background-color: var(--color-primary-focus);
    }
  }
  //Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }

  //Smartphone
  @media screen and (max-width: 767px) {
  }
`;
