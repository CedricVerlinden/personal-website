import { useState, useEffect, useRef, MutableRefObject } from "react";

import Navigation from "./components/Navigation";
import ResumeModal from "./components/ResumeModal";

const App = () => {
	const [darkMode, setDarkMode] = useState(true || false);
	const [modal, setModal] = useState(false);

	const userTheme = localStorage.getItem("theme");
	const systemTheme = window.matchMedia(
		"(prefers-color-scheme: dark)"
	).matches;

	let sunIcon: MutableRefObject<Element | null> = useRef(null);
	let moonIcon: MutableRefObject<Element | null> = useRef(null);

	useEffect(() => {
		sunIcon.current = document.querySelector(".sun");
		moonIcon.current = document.querySelector(".moon");

		if (userTheme === "dark" || (!userTheme && systemTheme)) {
			document.documentElement.classList.add("dark");
			setDarkMode(true);
			moonIcon.current?.classList.add("hidden");
			return;
		}

		setDarkMode(false);
		sunIcon.current?.classList.add("hidden");
	}, [userTheme, systemTheme]);

	const iconToggle = () => {
		sunIcon.current?.classList.toggle("hidden");
		moonIcon.current?.classList.toggle("hidden");
	};

	const handleThemeChange = () => {
		if (darkMode) {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
			setDarkMode(false);
			iconToggle();
			return;
		}

		document.documentElement.classList.add("dark");
		localStorage.setItem("theme", "dark");
		setDarkMode(true);
		iconToggle();
	};

	return (
		<>
			{/* Desktop */}
			<div className="max-lg:hidden select-none bg-light-background pt-8 dark:bg-dark-background transition-colors">
				<div className="container mx-auto h-screen">
					<Navigation
						modal={modal}
						setModal={setModal}
						onThemeChange={handleThemeChange}
					/>
					<div
						className={` ${
							modal && "blur-sm"
						} flex h-full items-center justify-between px-32 pb-36`}
					>
						<div>
							<p className="text-5xl text-light-text font-bold dark:text-dark-text">
								Cédric Verlinden
							</p>
							<p
								className={`text-2xl text-light-text dark:text-dark-text`}
							>
								Computer Science Student
							</p>
						</div>
						<img
							className="self-center rounded-3xl"
							src="/assets/profile.png"
							alt="AI Generated Cat"
						/>
					</div>
				</div>
			</div>

			{/* All other shmuck */}
			<div className={`${modal && 'blur-sm'} h-screen flex flex-col items-center bg-light-background p-8 dark:bg-dark-background transition-colors`}>
				<img
					onClick={handleThemeChange}
					className="w-32 rounded-3xl"
					src="/assets/profile.png"
					alt="AI Generated Cat"
				/>
				<div className="w-full flex flex-col items-center pt-8 gap-12">
					<div className="text-center">
						<p className="text-3xl text-light-text font-bold dark:text-dark-text">
							Cédric Verlinden
						</p>
						<p
							className={`text-2xl text-light-text dark:text-dark-text`}
						>
							Computer Science Student
						</p>
					</div>
					<div className="flex flex-col gap-2 w-full">
						<a
							href="https://github.com/CedricVerlinden"
							target="_blank"
							rel="noreferrer"
							className="text-center px-24 py-6 w-full text-xl text-light-text bg-light-secondary rounded-xl dark:text-dark-text dark:bg-dark-secondary"
						>
							📕 Projects
						</a>
						<a
							href="mailto:work@cedricverlinden.com"
							rel="noreferrer"
							className="text-center px-24 py-6 w-full text-xl text-light-text bg-light-secondary rounded-xl dark:text-dark-text dark:bg-dark-secondary"
						>
							📫 Contact
						</a>
						<button
							onClick={() => setModal(true)}
							className="px-24 py-6 w-full text-xl text-light-text bg-light-secondary rounded-xl dark:text-dark-text dark:bg-dark-secondary"
						>
							🔗 Resume
						</button>
					</div>
				</div>
			</div>
			
			{modal && <ResumeModal setModal={setModal} />}
		</>
	);
};

export default App;
