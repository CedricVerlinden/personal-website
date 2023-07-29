tailwind.config = {
	theme: {
		extend: {
			colors: {
				text: "#f7f7f8",
				background: "#09090b",
				primary: "#494a5b",
				secondary: "#121317",
				accent: "#6d6f88",
			},
		},
		fontFamily: {
			body: ["Roboto", "sans-serif"],
		},
	},
};

const cvButton = document.getElementById('cvButton');
const cvDialog = document.getElementById('cvDialog');

cvButton.addEventListener('click', () => {
	cvDialog.showModal();
});

function handleClick(language) {
	switch (language) {
		case "en":
			window.open('./cv/english.pdf', '_blank');
			cvDialog.close();
			return;
		case "nl":
			window.open('./cv/nederlands.pdf', '_blank');
			cvDialog.close();
			return;
		default:
			cvDialog.close();
			return;
	}
}
