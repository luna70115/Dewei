// src/services/rouletteApi.ts
import axios from "@/axios";

export const fetchsome = () => {
  return axios.get("/api/v1/roulette", {
    params: { _t: Date.now() }
  });
};

export const setsome = () => {
  return axios.post("/api/v1/roulette/draw");
};
