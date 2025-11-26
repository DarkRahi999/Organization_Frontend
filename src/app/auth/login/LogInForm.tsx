"use client";

import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { CustomToast } from "@/components/ui/toast";
import { useAppDispatch } from "@/hooks/hook";
import { authenticate } from "@/context/store/authSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { ILogIn } from "@/interface/user";
import { login } from "@/services/auth.service";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const logInSchema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

const LogInForm = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const form = useForm<ILogIn>({
    resolver: zodResolver(logInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: ILogIn) {
    try {
      const data: any = await login(values);

      // Dispatch authenticate action with user data
      dispatch(
        authenticate({
          auth: {
            isAuthenticated: true,
            user: data.user,
            token: data.access_token,
            isLoading: false,
          },
          user: [data.user],
          status: "Authenticated",
          isAuthenticated: true,
        })
      );

      CustomToast({
        title: "Login Successful!",
        description: "Welcome back!",
        type: "success",
      });

      // Redirect to dashboard or home page
      router.push("/");
    } catch (error: any) {
      console.error("Login error:", error);
      CustomToast({
        title: "Login Failed!",
        description: error.message || "Please check your credentials.",
        type: "error",
      });
    }
  }

  return (
    <div className="">
      <div className="flex items-center  min-h-screen">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 bg-white p-6 rounded-lg shadow-md w-[30%] mx-auto"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter your email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      {...field}
                      placeholder="Enter Your Password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LogInForm;
