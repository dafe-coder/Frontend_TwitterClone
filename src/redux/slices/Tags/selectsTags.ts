import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { LoadingState } from './state';

const selectTags = (state: RootState) => state.tags;

export const selectTagsItems = createSelector(
	selectTags,
	(state) => state.items
);
export const selectTagsStatus = createSelector(
	selectTags,
	(state) => state.status
);

const selectLoadingState = (state: RootState): LoadingState =>
	selectTags(state).status;

export const selectTagLoading = (state: RootState) =>
	selectLoadingState(state) === LoadingState.LOADING;
export const selectTagLoaded = (state: RootState) =>
	selectLoadingState(state) === LoadingState.LOADED;
