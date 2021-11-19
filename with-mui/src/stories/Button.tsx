import StyledButton from '@material-ui/core/Button'

interface ButtonProps extends React.ComponentProps<typeof StyledButton> {
    title: string;
    variant?: 'outlined' | 'contained';
    rest?: any;
}
const Button = ({title, variant, ...rest}:ButtonProps) => (
    <StyledButton variant={variant} {...rest}>{title}</StyledButton>
);
export default Button;