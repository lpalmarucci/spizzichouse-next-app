import { Icons } from "@/components/ui/icons";

export default function Spinner() {
  return (
    <div className="flex gap-2 items-center justify-center">
      <Icons.spinner className="mr-2 h-12 w-12 animate-spin" />
      <span className="font-semibold">Loading...</span>
    </div>
  );
}
