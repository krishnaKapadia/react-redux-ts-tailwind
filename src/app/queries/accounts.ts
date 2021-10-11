/** @format */
import { useQuery } from "react-query";

import { Account } from "../../models";

export function useGetAccounts(onSuccess?: (e: any) => void) {
  return useQuery<Account[]>(
    "accounts",
    () => []
  );
}
