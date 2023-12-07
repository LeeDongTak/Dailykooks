import { QueryClientProvider, useQuery } from '@tanstack/react-query';
import { getPlaces } from '../api/places';

export default function useMarkerFromFirebase() {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['firebase/places'],
    queryFn: getPlaces,
    staleTime: Infinity
  });

  return { firebaseMarker: data, isLoading, isError, error };
}

export const MarkerFromFirebaseProvider = ({ children }) => {
  return <QueryClientProvider>{children}</QueryClientProvider>;
};
