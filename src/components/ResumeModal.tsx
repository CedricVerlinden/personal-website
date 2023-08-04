interface ResumeType {
	setModal: (value: boolean) => void;
}

const ResumeModal = ({ setModal }: ResumeType) => {

	const handleLanguage = (language: string) => {
		window.open('/resume/' + language + ".pdf", '_blank');
		setModal(false);
		return;
	}

	return (
		<dialog className="drop-shadow-md fixed inset-0 z-50 flex items-center justify-center px-8 py-5 bg-light-background text-light-text rounded-xl dark:bg-dark-background dark:text-dark-text">
			<div className="relative flex flex-col items-center gap-3">
				<div className="flex flex-col gap-1 items-center">
					<h2 className="text-2xl font-bold">
						Resume Language
					</h2>
					<p className="">
						Please select one of the two languages to view to my
						resume in.
					</p>
				</div>
				<div className="flex gap-12">
					<button onClick={() => handleLanguage("english")} className="px-6 py-2 bg-light-secondary rounded-lg text-xl transition-colors hover:bg-light-primary dark:bg-dark-secondary dark:hover:bg-dark-primary">
						English
					</button>
					<button onClick={() => handleLanguage("nederlands")} className="px-7 py-2 bg-light-secondary rounded-lg text-xl transition-colors hover:bg-light-primary dark:bg-dark-secondary dark:hover:bg-dark-primary">
						Dutch
					</button>
				</div>
			</div>
			<svg
				onClick={() => setModal(false)}
				className="absolute top-3 right-3 cursor-pointer transition-transform hover:-translate-y-[.10em] fill-light-text dark:fill-dark-text"
				height="1.3em"
				viewBox="0 0 384 512"
			>
				<path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
			</svg>
		</dialog>
	);
};

export default ResumeModal;
