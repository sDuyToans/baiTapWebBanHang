import { createSelector } from "reselect";

const selectDongDonHangReducer = state => state.dongDonHangReducer;

export const selectDongDonHang = createSelector(
    [selectDongDonHangReducer],
    slice => slice.dongDonHang
)