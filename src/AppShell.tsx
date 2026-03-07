import { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRoutes from "./AppRoutes";

const queryClient = new QueryClient();

type AppShellProps = {
  includeToasters?: boolean;
};

export default function AppShell({ includeToasters = true }: AppShellProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {includeToasters ? (
          <>
            <Toaster />
            <Sonner />
          </>
        ) : null}
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <AppRoutes />
        </Suspense>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
