import { StyledButton } from './styles';

const Button = ({ children, primary = true, ...props }) => {
  return (
    <StyledButton $primary={primary} {...props} data-cy={'button'}>
      {children}
    </StyledButton>
  );
};

export default Button;
