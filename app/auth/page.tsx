"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SignInForm } from "@/components/form/SignIn/SignInForm";
import { SignUpForm } from "@/components/form/SignUp/SignUpForm";
import { useState } from "react";

export default function SigninPage() {
  const [tab, setTab] = useState<string>("signin");

  function onChange(val: string) {
    console.log(val);
    setTab(val);
  }

  return (
    <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="min-w-[100dvw] flex justify-center">
        <Tabs value={tab} onValueChange={onChange} defaultValue="signin" className="w-full max-w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <Card>
              <CardHeader>
                <CardTitle>Sign In</CardTitle>
                <CardDescription>Enter the username and password to login</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <SignInForm />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>Register</CardTitle>
                <CardDescription>Fill the form below for registering in our system.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <SignUpForm onRegisterSuccess={() => setTab("signin")} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
