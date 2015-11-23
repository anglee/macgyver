const notebookModel = {
	cell: {
		input: "1+1",
		output: 2
	}
};

const NotebookModelFactory = {
	getNotebookModel() {
		return notebookModel;
	}
};

export default NotebookModelFactory;