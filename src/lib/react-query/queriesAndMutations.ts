import {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from "@tanstack/react-query";
import {
  createPost,
  createUserAccount,
  signInAccount,
  signOutAccount,
  updatePost,
} from "../appwrite/api";
import { INewUser } from "@/types";

export const useCreateUserMutation = () => {
  return useMutation({
    mutationFn: (user: INewUser) => createUserAccount(user),
  });
};
export const useSignin = () => {
  return useMutation({
    mutationFn: (user: { email: string; password: string }) =>
      signInAccount(user),
  });
};
export const useSignOut = () => {
  return useMutation({
    mutationFn: signOutAccount,
  });
};
export const useCreatePost = () => {
  return useMutation({
    mutationFn: (post: FormData) => createPost(post),
  });
};

export const useUpdatePost = () => {
  return useMutation({
    mutationFn: (post: FormData) => updatePost(post),
  });
};
