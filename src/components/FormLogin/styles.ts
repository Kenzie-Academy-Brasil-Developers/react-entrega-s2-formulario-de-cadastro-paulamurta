import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5vh;
  width: 30vw;
  padding: 7vh 4vh;
  background-color: var(--color-gray-3);
  border-radius: 4px;
  margin-bottom: 10vh;

  h2 {
    color: var(--color-gray-0);
    font-weight: 700;
    font-size: 1.1rem;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4vh;

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

      input {
        width: 100%;
        height: 45px;
        background-color: var(--color-gray-2);
        color: var(--color-gray-1);
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

  p {
    text-decoration: none;
    font-weight: 600;
    font-size: 0.8rem;
    color: var(--color-gray-1);
  }

  a {
    width: 100%;
  }

  button {
    width: 100%;
    height: 40px;
    font-weight: 500;
    border: none;
    background-color: var(--color-gray-1);
    color: var(--color-gray-0);
    border-radius: 4px;
  }

  button:hover {
    background-color: var(--color-gray-2);
  }

  //Tablet
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }

  //Smartphone
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
