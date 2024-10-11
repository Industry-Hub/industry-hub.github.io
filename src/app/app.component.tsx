import { Theme } from "@radix-ui/themes";
import React from "react";
import { RouterProvider } from "react-router-dom";
import AppRoutesConfig from "./router";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { Toaster as ToastMaster } from "@/components/ui/toaster";
import './app.component.scss'

const App: React.FC = () => {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      <Theme accentColor="gray" scaling="95%" appearance="dark" className="w-screen">
        <RouterProvider router={AppRoutesConfig} />
        <Toaster />
        <ToastMaster />
      </Theme>
    </ThemeProvider>
  );
};

export default App;
