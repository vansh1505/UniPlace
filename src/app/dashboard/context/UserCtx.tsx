"use client";

import { createContext, useContext } from "react";

export type User = {
  name: string;
  email: string;
  collegeName: string;
  admnno: string;
  profileCompleted: boolean;
  role: string;
  academicInfo?: {
    course: string;
    branch: string;
    semester: string;
    yearOfPassing: number;
    cgpa?: number;
    backlogs?: number;
    percentage?: number;
  };
};

export const UserContext = createContext<User | null>(null);
export const useUser = () => useContext(UserContext);
