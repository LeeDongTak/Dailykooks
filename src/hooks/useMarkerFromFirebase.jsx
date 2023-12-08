import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { getPlaces } from '../api/places';

export default function useMarkerFromFirebase() {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['firebase/places'],
    queryFn: getPlaces,
    staleTime: Infinity
  });

  return { markersFromFirebase: data, isLoading, isError, error };
}

export const MarkerFromFirebaseProvider = ({ children }) => {
  return <QueryClientProvider client={new QueryClient()}>{children}</QueryClientProvider>;
};
