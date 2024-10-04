import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import LenisScroll from "./LenisScroll";
import "./globals.css";
import PageTitleSwitcher from "@/components/PageTitleSwitcher";
import { ThemeProvider } from "@/components/theme-provider";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Tanmay's Portfolio",
	description: "Portfolio of Tanmay, a full-stack developer.",
	keywords: "Tanmay, portfolio, full-stack developer, web developer",
	openGraph: {
		type: "website",
		url: "https://tanmayportfolio.vercel.app",
		title: "Tanmay's Portfolio",
		description: "Portfolio of Tanmay, a full-stack developer.",
		images: [
			{
				url: "https://tanmayportfolio.vercel.app/og-image.jpg",
				width: 800,
				height: 600,
				alt: "Tanmay's Portfolio",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html className={"overflow-x-hidden"} lang="en">
			<head>
				<meta charSet="UTF-8" />
				<title>Tanmay&apos;s Portfolio</title>
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<meta
					name="description"
					content="Portfolio of Tanmay, a full-stack developer."
				/>
				{/* OpenGraph & Twitter Meta Tags */}
				<meta
					property="og:url"
					content="https://tanmayportfolio.vercel.app"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Tanmay's Portfolio" />
				<meta
					property="og:description"
					content="Portfolio of Tanmay, a full-stack developer."
				/>
				<meta
					property="og:image"
					content="https://opengraph.b-cdn.net/production/images/97ee74a5-53a2-49e7-afb1-67bc859a8b76.jpg?token=GSOh54FHCcIuch5BvFrRcaOKvKB4c_oTR5RADd9QW4A&height=630&width=1200&expires=33258705913"
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					property="twitter:domain"
					content="tanmayportfolio.vercel.app"
				/>
				<meta
					property="twitter:url"
					content="https://tanmayportfolio.vercel.app"
				/>
				<meta name="twitter:title" content="Tanmay's Portfolio" />
				<meta
					name="twitter:description"
					content="Portfolio of Tanmay, a full-stack developer."
				/>
				<meta
					name="twitter:image"
					content="https://opengraph.b-cdn.net/production/images/97ee74a5-53a2-49e7-afb1-67bc859a8b76.jpg?token=GSOh54FHCcIuch5BvFrRcaOKvKB4c_oTR5RADd9QW4A&height=630&width=1200&expires=33258705913"
				/>

				{/* Google Fonts */}
				<link
					href="https://api.fontshare.com/v2/css?f[]=dancing-script@400&f[]=pencerio@50&display=swap&f[]=clash-display@700&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body
				className={
					oswald.className +
					" bg-dot-black/[0.2] overflow-x-hidden -ms-overflow-x-hidden"
				}
			>
				<PageTitleSwitcher originalTitle="Tanmay's Portfolio" />
				<LenisScroll />
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
