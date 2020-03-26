export const addtweetAction = state => {
	return {
		type: 'ADD_TWEET',
		payload: state
	};
};

export const deleteTweetAction = id => {
	return {
		type: 'DELETE_TWEET',
		payload: id
	};
};
