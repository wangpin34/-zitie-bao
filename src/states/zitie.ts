import { create } from 'zustand'

export type FontFamily = 'default' | 'kg primary dots'

export const FONT_FAMILY: Array<FontFamily> = ['default', 'kg primary dots']

export const DEFAULT_FONT_FAMILY = 'default'

export const useFontFamilyStore = create<{
  value: FontFamily
  setValue: (ft: FontFamily) => void
}>((set) => ({
  value: 'kg primary dots',
  setValue: (ft: FontFamily) => set(() => ({ value: ft })),
}))
