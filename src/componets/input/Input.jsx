import { InputContainer } from './styles';

const Input = ({ type, placeholder, value, onChange }) => {
  return <InputContainer type={type} placeholder={placeholder} value={value} onChange={onChange} data-cy="input" />;
};

export default Input;
