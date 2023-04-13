import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 20px 20px 100px 20px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2.5em;
  gap: 1em;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    gap: 3em;
    margin: 0 20px;
  }

  .container {
    display: flex;
    flex-direction: row;
    gap: 1em;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    width: 120px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 80px;
    }
  }

  input {
    line-height: 2.5em;
    font-size: 1.3em;
    font-weight: 800;
    padding-left: 15px;
    border: 1px solid ${({ theme }) => theme.colors.smokeyGrey};
    border-radius: 10px;
    margin-top: 10px;

    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.purple};
    }

    ::placeholder {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  input:focus-visible {
    outline: none;
    background-color: none;
  }

  .input-container.invalid {
    color: red;
    & input {
      border: 1px solid red;
    }
    & label {
      color: red;
    }
  }

  label {
    color: ${({ theme }) => theme.colors.smokeyGrey};
    font-weight: 700;
    letter-spacing: 0.1em;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 0.9em;
    }
  }

  small {
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 0.7em;
    }
  }
`;

export const TotalStyled = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    gap: 3em;
  }

  h1 {
    color: ${({ theme }) => theme.colors.purple};
    font-size: 6em;
    font-weight: 800;
    font-style: italic;
    margin: 0;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 3em;
    }
  }

  h1 > span {
    color: ${({ theme }) => theme.colors.offBlack};
  }

  .button {
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      justify-content: center;
      flex-direction: column;
      position: relative;

      button {
        z-index: 1;
      }

      hr {
        position: absolute;
        z-index: 0;
      }
    }
  }

  hr {
    width: 100%;
    height: 1px;
  }
  button {
    background-color: ${({ theme }) => theme.colors.purple};
    color: ${({ theme }) => theme.colors.white};
    padding: 0.8em;
    font-size: 1.5em;
    font-weight: 700;
    border-radius: 100%;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 0.5em;
      padding: 1.5em;
    }
  }
`;
