"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Product {
    id: number;
    name: string;
    price: string;
    description: string;
    image: string;
}

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.4 }}
            className="group relative w-full max-w-sm rounded-xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl dark:bg-black/40"
        >
            <div className="relative h-64 w-full overflow-hidden">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="relative h-full w-full"
                >
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
            </div>

            <div className="p-6 relative z-10 flex flex-col gap-3">
                <h3 className="text-2xl font-bold text-white tracking-wide group-hover:text-blue-400 transition-colors">
                    {product.name}
                </h3>
                <p className="text-sm text-gray-300 line-clamp-2">
                    {product.description}
                </p>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        {product.price}
                    </span>
                    <Button variant="outline" className="border-blue-500/50 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300">
                        Buy Now
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}
