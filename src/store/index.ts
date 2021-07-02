import create, { SetState, StateCreator } from 'zustand';

type State = {
  cacheRandomiser: number
  currentSection: number
  isLoading: boolean
  setCurrentSection: (currentSection: number) => void
  setIsLoading: (isLoading: boolean ) => void
}

const stateCreator: StateCreator<State, SetState<State>> = (set, get) => ({
    cacheRandomiser: Math.ceil(Math.random()*1000000000),
    currentSection: -1,
    isLoading: true,
    setCurrentSection: (currentSection) => set({ currentSection }),
    setIsLoading: (isLoading ) => {
      set({ isLoading })
      if (!isLoading){
        set({currentSection: 0})
      }
    },
})

const useStore = create<State>(stateCreator);

export default useStore
