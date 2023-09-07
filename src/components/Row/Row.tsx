import React, { FC } from "react";
import { Stack } from "@mui/material";

interface RowProps {
  spacing?: number;
  justifyContent?: string;
  children?: React.ReactNode;
}

export const Row: FC<RowProps> = ({ spacing, justifyContent, children }) => {
  return <Stack direction="row" justifyContent={justifyContent} spacing={spacing} alignItems="center">
    {children}
  </Stack>;
}
