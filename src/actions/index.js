/* eslint-disable eol-last */
export const selectLibrary = (libraryId) => {
	return {
		type: 'select_library',
		payload: libraryId
	};
};