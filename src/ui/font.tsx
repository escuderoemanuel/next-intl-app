import { Praise, Raleway, Inter } from 'next/font/google'

export const inter = Inter({
  subsets: ["latin"],
});

export const raleway = Raleway({ weight: ["500", "600", "800"], subsets: ["latin"] });

export const praise = Praise({
  weight: ["400"],
  subsets: ["latin"],
});