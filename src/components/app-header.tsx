import { Bell } from "lucide-react";
import { Button } from "./ui/button";
import { SidebarTrigger } from "./ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Profile from "@/assets/img/profile.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

function AppHeader() {
  return (
    <header className="flex sticky top-0 z-50 bg-primary-foreground h-16 shrink-0 items-center gap-2 transition-[width,height] border-b ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4 justify-between w-full">
        <SidebarTrigger className="-ml-1" />
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            aria-label="notification"
            className="cursor-pointer"
          >
            <Bell />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                aria-label="profile"
                className="cursor-pointer"
              >
                <Avatar>
                  <AvatarImage src={Profile} alt="account" />
                  <AvatarFallback>DL</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Setting</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
