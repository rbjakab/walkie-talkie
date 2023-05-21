import { ErrorContextProvider } from './ErrorContext';
import { AuthContextProvider } from './AuthContext';
import { SelectedContextProvider } from './SelectedWalkieTalkie';

interface WrapperProps {
    children: React.ReactNode;
}

export const ContextWrapper = ({ children }: WrapperProps): JSX.Element => {
    return (
        <SelectedContextProvider>
            <ErrorContextProvider>
                <AuthContextProvider>{children}</AuthContextProvider>
            </ErrorContextProvider>
        </SelectedContextProvider>
    );
};
