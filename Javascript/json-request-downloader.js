const requestUrl = "";

fetch(requestUrl)
	.then((response) => response.json())
	.then((data) => {
		const jsonString = JSON.stringify(data);
		const blob = new Blob([jsonString], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = "my.json";
		link.click();
		URL.revokeObjectURL(url);
	});
