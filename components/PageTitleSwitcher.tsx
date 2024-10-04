"use client"; // Mark this as a client component

import { useEffect } from "react";

const PageTitleSwitcher = ({ originalTitle }: { originalTitle: string }) => {
	useEffect(() => {
		const titles = [
			"Are you lost? 🧐",
			"Come back soon! 🚀",
			"Where are you wandering? 🌍",
			"Did you bring snacks? 🍿",
			"Lost in the internet maze? 🕸️",
		];
		let currentIndex = 0;
		let interval: NodeJS.Timeout | null = null;

		const updateTitle = () => {
			document.title = titles[currentIndex];
			currentIndex = (currentIndex + 1) % titles.length;
		};

		const handleVisibilityChange = () => {
			if (document.hidden) {
				// Start cycling through titles when the page is hidden
				if (!interval) {
					updateTitle(); // Set the first title immediately
					interval = setInterval(updateTitle, 1000); // Change every second
				}
			} else {
				// Clear the interval and restore the original title when the page is visible
				if (interval) {
					clearInterval(interval);
					interval = null; // Reset the interval variable
				}
				document.title = originalTitle; // Restore original title
			}
		};

		document.addEventListener("visibilitychange", handleVisibilityChange);

		// Cleanup on unmount
		return () => {
			document.removeEventListener(
				"visibilitychange",
				handleVisibilityChange
			);
			if (interval) {
				clearInterval(interval);
			}
		};
	}, [originalTitle]);

	return null; // This component doesn't render anything
};

export default PageTitleSwitcher;
