import { QueryClientProvider, QueryClient } from "@tanstack/react-query";


const queryClient = new QueryClient();

function TanstackQueryClientProvider(props) {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  )
}

export default TanstackQueryClientProvider;