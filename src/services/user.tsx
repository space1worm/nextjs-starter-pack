import { useQuery } from "@tanstack/react-query";

import { apiRequest } from "@/utils/apiRequest";
import { usersSchema, type UserT } from "@/services/zodTypes";

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const usersData = await apiRequest<UserT[]>("https://jsonplaceholder.typicode.com/users");
      return usersSchema.parse(usersData);
    },
  });
};
