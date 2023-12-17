import { Header } from '@/features/header';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/react-query';

function App() {
  return (<div className='bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen'>
    <Header />
    <QueryClientProvider client={queryClient}>
      <div>PLACEHOLDER</div>
    </QueryClientProvider>
  </div>
  )
}

export default App
