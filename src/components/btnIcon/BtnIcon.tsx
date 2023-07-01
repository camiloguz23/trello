'use client'
import { IconButton, Tooltip } from '@mui/material';

interface Prop {
  title: string;
  children: React.ReactNode;
  onAction: () => void;
}

function BtnIcon({ children, onAction, title }: Prop): JSX.Element {
  return (
    <Tooltip title={`${title}`}>
      <IconButton
        onClick={() => {
          onAction();
        }}
      >
        {children}
      </IconButton>
    </Tooltip>
  );
}

export default BtnIcon;
