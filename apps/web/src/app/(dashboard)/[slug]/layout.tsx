import React from "react";

import Sidebar from "@/components/layouts/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="h-dvh flex bg-gray-100">
      <Sidebar />
      <main className="my-2 mr-2 flex w-full flex-grow flex-col overflow-hidden rounded-md border bg-white">
        {children}
      </main>
    </div>
  );
}
