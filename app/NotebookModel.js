const notebookModel = {
	cells: [
		{
			id: 1,
			input: "1+1",
			output: 2
		},
		{
			id: 2,
			input: "1+3",
			output: 4
		}
	]
};

const NotebookModelFactory = {
	getNotebookModel() {
		return notebookModel;
	}
};

export default NotebookModelFactory;