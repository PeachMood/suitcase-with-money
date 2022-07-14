import React from "react";
import { Stack } from "@mui/material";

interface RowProps {
    spacing?: number;
    justifyContent?: string;
    children?: React.ReactNode;
}

export const Row = ({ spacing, justifyContent, children }: RowProps): JSX.Element => {
    return <Stack direction="row" justifyContent={justifyContent} spacing={spacing} alignItems="center">
        {children}
    </Stack>;
}