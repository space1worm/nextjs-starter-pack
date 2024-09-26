"use client";

import { RedirectToSignIn } from "@clerk/nextjs";
import { useState } from "react";

import { useModalsStore } from "@/providers/ModalsProvider";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function AuthModal() {
  const { authModalOpen, authModelOpenChange } = useModalsStore((state) => state);
  const [redirect, setRedirect] = useState(false);

  return (
    <>
      <Dialog open={authModalOpen} onOpenChange={authModelOpenChange}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Sign In to Dreamers</DialogTitle>
            <DialogDescription>A Dreamers account is required to use wishlist.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => authModelOpenChange(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                authModelOpenChange(false);
                setRedirect(true);
              }}
            >
              Sign In
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      {redirect && <RedirectToSignIn />}
    </>
  );
}
