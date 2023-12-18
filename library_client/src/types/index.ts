import { User } from "@/features/auth";

export type Roles = User["user_type"];

export type MenuItem = { key: string; name: string; cb: () => void };

export interface ResponseBody<Tpayload extends object> {
  data: Tpayload[];
  links: Links;
  meta: Meta;
}

interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  links: Link[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

interface Link {
  url?: string;
  label: string;
  active: boolean;
}

interface Links {
  first: string;
  last: string;
  prev?: null | number;
  next?: null | number;
}