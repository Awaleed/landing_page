"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { setBranch } from "@/redux/slices/branch";
import { BranchModel, useAllBranchesQuery } from "@/services/branch-api";
import { Skeleton } from "@mui/material";

export default function BranchDialog() {
  const currentBranch = useAppSelector((state) => state.branch.value);
  const appDispatch = useAppDispatch();

  const open = currentBranch == null;

  const handleClose = (value: BranchModel | null) => {
    if (value != null) {
      console.table({
        value: value,
        currentBranch: currentBranch,
        hasBranch: currentBranch != null,
      });
      appDispatch(setBranch(value));
    }
  };

  const handleListItemClick = (value: BranchModel | null) => {
    handleClose(value);
  };

  const { data = [], isLoading, isFetching, isError } = useAllBranchesQuery({});

  return (
    <Dialog onClose={() => handleClose(null)} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      {isError && <div>An error has occurred!</div>}
      {isLoading && <Skeleton />}

      {data && (
        <List sx={{ pt: 0 }}>
          {data.map((branch) => (
            <ListItem key={branch.id} disableGutters>
              <ListItemButton
                onClick={() => handleListItemClick(branch)}
                key={branch.id}
              >
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={branch.name_ar} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
    </Dialog>
  );
}