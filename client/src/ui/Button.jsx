import styled, { css } from 'styled-components';

const variations = {
  primary: css`
    color: #fff;
    background-color: var(--color-red-700);
    &:hover {
      color: var(--color-red-700);
      border: 1px solid var(--color-red-700);
      background-color: #e0e2e5;
    }
  `,
  secondary: css`
    color: var(--color-grey-900);
    background-color: #fff;
    &:hover {
      color: #fff;
      border: var(--color-grey-800);
      background-color: var(--color-grey-800);
    }
  `,
};
const ButtonStyle = styled.button`
  background-color: orange;
  text-transform: uppercase;
  display: inline-block;
  padding: 0.625rem 2.5rem;
  font-weight: 500;
  box-shadow: var(--shadow-md);
  letter-spacing: 2px;
  width: 14.5rem;
  ${(prop) => variations[prop.type]}
  transition: all ease-out 0.3s;
  &:hover {
    transform: translateY(-10px);
  }
`;
ButtonStyle.defaultProps = {
  type: 'primary',
};
function Button({ children, type }) {
  return <ButtonStyle type={type}>{children}</ButtonStyle>;
}

export default Button;
