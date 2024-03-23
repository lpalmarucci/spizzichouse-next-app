import React from "react";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { Icons } from "@/components/ui/icons";

type SubmitButtonProps = {
  isDisabled?: boolean;
  text: string;
};

function SubmitButton({ isDisabled, text }: SubmitButtonProps) {
  const status = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={isDisabled}>
      {status.pending && <Icons.spinner className="mr-2 animate-spin" />}
      {text}
    </Button>
  );
}

export default SubmitButton;
