import { TMDBImage } from '@shared/models/image';
import { ITMDBMovie } from '@shared/models/movie';
import {
  addToCollection,
  getCollection,
  removeFromCollection,
} from '@shared/providers/database';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';

export const useAddToCollection = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (values: {
      file_path: string;
      movie_id: number;
      aspect_ratio: number;
      width: number;
      height: number;
      type: 'backdrop' | 'logo' | 'poster' | 'profile' | 'still';
    }) =>
      addToCollection({
        file_path: values.file_path,
        movie_id: values.movie_id,
        aspect_ratio: values.aspect_ratio,
        height: values.height,
        width: values.width,
        type: values.type,
      }),
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: ['collection'] }),
  });
};

export const useRemoveFromCollection = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (values: {
      file_path: string;
      movie_id: number;
      aspect_ratio: number;
      width: number;
      height: number;
      type: 'backdrop' | 'logo' | 'poster' | 'profile' | 'still';
    }) => removeFromCollection(values.file_path),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['collection'] });
    },
  });
};

export const useGetCollection = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['collection'],
    queryFn: () => getCollection(),
  });

  return {
    collection: data,
    isLoading,
    error,
  };
};

export const useImageIsInCollection = (image: TMDBImage) => {
  return getCollection(image.file_path, 1).then((d) => d.length > 0);
};
