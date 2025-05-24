export const Footer = () => {
  return (
    <footer className="flex justify-center bg-white p-4 shadow-md">
      <p className="text-sm text-gray-600">
        {new Date().getFullYear()} LDA. Todos os direitos reservados.
        Desenvolvido por LDI.
      </p>
    </footer>
  );
};
