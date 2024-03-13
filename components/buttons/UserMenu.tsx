'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { signOut, useSession } from 'next-auth/react';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useTheme } from 'next-themes';

export default function UserMenu() {
  const { data: session } = useSession();
  const { setTheme, resolvedTheme } = useTheme();
  if (!session) return;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="lg"
          className="justify-start gap-4 hover:backgroud"
        >
          {session.user?.name}
          <Avatar className="mr-2">
            <AvatarImage
              src={session.user?.image ?? ''}
              height={25}
              width={25}
            />
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Email: {session.user?.email}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <div className="w-full flex justify-between items-center space-x-2">
            <Label htmlFor="airplane-mode">Dark mode</Label>
            <Switch
              id="airplane-mode"
              checked={resolvedTheme === 'dark'}
              onCheckedChange={(e) => {
                setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
              }}
            />
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem
          className={'cursor-pointer'}
          onClick={() => signOut({ callbackUrl: '/' })}
        >
          <span className="text-destructive">Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
