type ErrorMessageProps = {
    children: React.ReactNode;
};

export const ErrorMessage = ({ children }: ErrorMessageProps) => {
    return (
        <p className="bg-red-200 rounded-lg text-red-300 p-3 uppercase text-sm font-bold text-center">
            {children}
        </p>
    );
};
