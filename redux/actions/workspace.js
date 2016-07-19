import 'isomorphic-fetch';

const addWorkspaceSuccess = () => {
	return {
		type: 'ADD_WORKSPACE_SUCCESS',
	};
};

function addWorkspace(workspace) {
	return function(dispatch) {
        let postInit = {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				title: workspace.title,
                desc: workspace.desc
			})
		}
		return fetch('/workspaces/', postInit).then(res => {
			return res.json();
		}).then(data => {
			console.log(data);
			return dispatch(addWorkspace(data))
		})
	}
}

const storeWorkspace = (recipe) => {
    return {
        type: 'STORE_RECIPE'
        recipe: recipe
    }
}


exports.addWorkspace = addWorkspace;
exports.addWorkspaceSuccess = addWorkspaceSuccess;
