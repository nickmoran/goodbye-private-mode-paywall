console.log("hellooooooo===============================================================================");
let oldEstimate = navigator.storage.estimate;
navigator.storage.estimate = async () => {
	let result = await oldEstimate();
	result.quota = 235854856272;
	return result;
};