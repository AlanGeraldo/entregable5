import { configureStore } from "@reduxjs/toolkit";
import trainerSlice from "./slices/trainer.slices";

export default configureStore({
  reducer: {
    trainer: trainerSlice,
  },
});
