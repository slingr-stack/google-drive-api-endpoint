step.listFilesGoogledrive = function (inputs) {

	var inputsLogic = {
		fileId: inputs.fileId || ""
	};

	return endpoint.files.get(inputsLogic.fileId);
};
