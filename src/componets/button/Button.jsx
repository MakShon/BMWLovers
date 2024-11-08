import { StyledButton } from './styles';

const Button = ({ children, primary = true, ...props }) => {
  return (
    <StyledButton $primary={primary} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
