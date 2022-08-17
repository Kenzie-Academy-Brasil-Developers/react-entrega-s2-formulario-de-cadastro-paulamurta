import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: var(--color-gray-4);
  padding: 3vh 20vw;
  border-bottom: 1px solid var(--color-gray-2);

  button {
    border: none;
    background-color: var(--color-gray-3);
    font-size: 0.8rem;
    color: var(--color-gray-0);
    padding: 5px 15px;
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
    padding: 3vh;
  }
`;
