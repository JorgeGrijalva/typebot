import { TypebotLogoFull } from "@/components/TypebotLogo";
import { ButtonLink } from "@/components/link";
import { signinUrl } from "@/constants";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "@tanstack/react-router";
import ImageLogo from "../../../assets/logo.png";

type Props = {
  className?: string;
};

export const TopBar = ({ className }: Props) => {
  const { pathname } = useLocation();

  return (
    <div
      className={cn(
        "bg-transparent flex items-center justify-between flex-1 h-16 max-w-7xl px-4",
        className,
      )}
    >
      <Link to="/" className="flex items-center space-x-1">
        <img src={ImageLogo} alt="Logo" className="h-8" />
        <p className="font-semibold">Norobot</p>
      </Link>
      {pathname === "/" && (
        <ButtonLink href={signinUrl} variant="outline" target="_blank">
          Go to dashboard
        </ButtonLink>
      )}
    </div>
  );
};
