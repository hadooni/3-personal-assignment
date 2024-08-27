import { createSlice } from "@reduxjs/toolkit";

const defaultCard = () => {
  let arr = [];
  for (let i = 0; i < 6; i++) {
    arr.push({
      img_url:
        "https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png",
      korean_name: "",
      types: [],
      id: 10000 + i,
      description: "",
    });
  }
  return arr;
};

const initialState = defaultCard();

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      state.push(action.payload);
    },
    removePokemon: (state, action) => {
      state.filter((p) => p.id !== action.payload);
    },
  },
});

export const { addPokemon, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
