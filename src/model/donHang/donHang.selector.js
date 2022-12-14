import { createSelector } from 'reselect';

const selectDonHangReducer = state => state.donHangReducer;

export const selectDonHang = createSelector(
    [selectDonHangReducer],
    slice => slice.donHang
)

export const selectDonHangId = createSelector(
    [selectDonHangReducer],
    slice => slice.donHangId
)