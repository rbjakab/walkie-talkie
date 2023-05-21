import { ErrorContextProvider } from './ErrorContext';
import { AuthContextProvider } from './AuthContext';

interface WrapperProps {
    children: React.ReactNode;
}

export const ContextWrapper = ({ children }: WrapperProps): JSX.Element => {
    return (
        <ErrorContextProvider>
            <AuthContextProvider>{children}</AuthContextProvider>
        </ErrorContextProvider>
    );
};
