import React from "react";
import {Stack} from "@mui/material";

import styles from "./Container.module.css";

interface ContainerProps {
    spacing?: number;
    children?: React.ReactNode;
}

export const Container = ({spacing, children}: ContainerProps) => {
    return <Stack spacing={spacing} className={styles.container} justifyContent="space-between">
        {children}
    </Stack>
}

