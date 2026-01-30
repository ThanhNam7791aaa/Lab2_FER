"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

export default function LoginPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof typeof errors]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let isValid = true;
        const newErrors = { email: "", password: "" };

        if (!formData.email) {
            newErrors.email = "Email is required";
            isValid = false;
        }
        if (!formData.password) {
            newErrors.password = "Password is required";
            isValid = false;
        }

        setErrors(newErrors);

        if (isValid) {
            console.log("Login successful:", formData);
            router.push("/");
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-black relative overflow-hidden p-4">
            {/* Background Ambience */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px]" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md relative z-10"
            >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-2">
                            Welcome Back
                        </h1>
                        <p className="text-gray-400 text-sm">Sign in to access your dashboard</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-gray-300">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="m@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500/50 focus:ring-blue-500/20"
                            />
                            {errors.email && (
                                <p className="text-xs text-red-400 font-medium">{errors.email}</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password" className="text-gray-300">Password</Label>
                                <Link href="#" className="text-xs text-blue-400 hover:text-blue-300">Forgot password?</Link>
                            </div>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500/50 focus:ring-blue-500/20"
                            />
                            {errors.password && (
                                <p className="text-xs text-red-400 font-medium">{errors.password}</p>
                            )}
                        </div>
                        <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 py-6 text-lg font-medium shadow-lg shadow-blue-500/20">
                            Sign In
                        </Button>
                    </form>

                    <div className="mt-8 text-center text-sm text-gray-500">
                        Don&apos;t have an account?{" "}
                        <Link
                            href="/register"
                            className="text-white hover:text-blue-400 font-medium transition-colors"
                        >
                            Create Account
                        </Link>
                    </div>
                    <div className="mt-4 text-center">
                        <Link href="/" className="text-sm text-gray-500 hover:text-white transition-colors">
                            ← Back to Home
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
