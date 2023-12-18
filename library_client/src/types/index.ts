import { User } from "@/features/auth";

export type Roles = User["user_type"];

export type MenuItem = { key: string; name: string; cb: () => void };
