var addWorkspaceSuccess = require('../actions/workspace').addWorkspaceSuccess;
var addWorkspace = require('../actions/workspace').addWorkspace;
var update = require('react-addons-update');
var setCurrentPlace = require('../actions/workspace').setCurrentPlace;

const initialState = {
	currentWorkspaces: [],
    googlePlaces: [],
    currentPlace: null,
	workspaceSaved: false
};

const workspaceReducer = (state, action) => {
	state = state || initialState;
    if (action.type ==='GET_WORKSPACES_SUCCESS') {
        console.log(action.workspaces)
        let newState = update(state, {
            currentWorkspaces: {$push: [action.workspaces]}
        });
    }
    if (action.type === 'ADD_WORKSPACE_SUCCESS') {
        let newState = update(state, {
            currentWorkspaces: { $push: [action.workspace]},
            workspaceSaved: { $set:true }
        });
        state = newState;
	}
	if (action.type === 'SET_CURRENT_PLACE') {
		let newState = update(state, {
		currentPlace: {$set: action.place}
    });
		state = newState;
    }
    if (action.type === 'GET_MAP_PLACE_SCCESS') {
        let newState = update(state, {
            googlePlaces: {$push: action.place}
        })
    }

    return state;
};

module.exports = workspaceReducer;
