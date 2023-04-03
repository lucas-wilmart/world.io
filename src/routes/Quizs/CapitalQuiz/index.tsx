import React, { useEffect, useMemo } from 'react'
import Loader from '../../../components/Loader'
import Quiz from '../../../components/Quiz'
import ServiceError from '../../../components/ServiceError'
import useCountriesService from '../../../hooks/useCountriesService'
import { Country } from '../../../types/country'
import { QuizQuestion } from '../../../types/quiz'
import { shuffle } from '../../../utils/array'

const CapitalQuiz: React.FC = () => {
  const { countries, loadAllCountries, loading, error } = useCountriesService()

  useEffect(() => {
    loadAllCountries()
  }, [])

  useEffect(() => {
    console.log('flag X', countries)
  }, [countries])

  const questions = useMemo<QuizQuestion[] | undefined>(() => {
    console.log('trigger useMemo')
    if (countries) {
      return shuffle<Country>(countries)
        .slice(0, 10)
        .map((item) => {
          console.log('flag item')
          let answers: string[] = []
          const randomCountries = shuffle<Country>(countries)

          let i = 0
          while (answers.length < 3) {
            const randomCountry = randomCountries[i]

            if (randomCountry.cca2 !== item.cca2 && item.capital.length > 0) {
              answers.push(randomCountry.capital[0])
            }

            i = i + 1
          }

          const correctAnswer = item.capital[0]
          answers.push(correctAnswer)

          return {
            question: `Capital of ${item.name.common} ?`,
            answers: shuffle<string>(answers),
            correctAnswer
          }
        })
    }

    return undefined
  }, [countries])

  return (
    <div>
      {loading && <Loader />}
      {error && <ServiceError />}
      {questions && <Quiz title="Capital cities" questions={questions} />}
    </div>
  )
}

export default CapitalQuiz
