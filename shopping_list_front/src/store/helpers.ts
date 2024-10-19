import { SliceDto } from "./reducer_dtos/SliceDto";

export const updateHelper = <T>(state: Partial<T>, payload: SliceDto<T>) => {
  if (!payload) return;
  if (!state) { state = {} as Partial<T> };
  (Object.keys(payload) as (keyof T)[]).forEach((key) => {
    if (typeof payload[key] === "object" && !Array.isArray(payload[key])) {
      return updateHelper(state[key] as Partial<T>, payload[key] as SliceDto<T>);
    }
    if (!payload![key] || state[key] === payload![key]) return;
    state[key] = payload![key];
  })

}