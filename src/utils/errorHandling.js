export const handleError = (error) => {
    console.error('An error occurred:', error);
    // Adicionar lógica para exibir um alerta ou mensagem para o usuário
  };
  const LazyComponent = React.lazy(() => import('./LazyComponent'));

  <Suspense fallback={<Text>Loading...</Text>}>
    <LazyComponent />
  </Suspense>
    