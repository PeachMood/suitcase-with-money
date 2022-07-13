import React from "react";
import { Stack } from "@mui/material";

interface RowProps {
    justifyContent?: string;
    children?: React.ReactNode;
}

export const Row = ({ justifyContent, children }: RowProps): JSX.Element => {
    return <Stack direction="row" justifyContent={justifyContent} spacing={2}>
        {children}
    </Stack>;
}