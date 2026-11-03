
import type { ReactNode } from "react";

type SiteShellProps = {
  activeSection: string;
  children: ReactNode;
};

export default function SiteShell({
  activeSection,
  children,
}: SiteShellProps) {
  return (
    <div
      data-active-section={activeSection}
      className="flex h-dvh w-full flex-col overflow-hidden"
    >
      {children}
    </div>
  );
}
