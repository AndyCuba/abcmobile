import { createStore } from 'vuex'

export interface State {
  questionNumber: number,
  userAge: number | null
}

const store = createStore({
  state (): State {
    return {
      questionNumber: 1,
      userAge: null
    }
  },
  mutations: {
    setCurrentQuestion(state: State, number: number) {
      state.questionNumber = number
    },
    setCurrentUserAge(state, birthYear: number) {
      const currentYear = new Date().getFullYear()
      state.userAge = currentYear - birthYear
    }
  },
  getters: {
    getCurrentQuestionNumber(state): number {
      return state.questionNumber
    },
    getUserAge(state): number | null {
      return state.userAge
    }
  }
})

export default store
