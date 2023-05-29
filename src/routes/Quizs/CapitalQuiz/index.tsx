import React, { useEffect, useMemo } from 'react'

import useCountriesService from '@/hooks/useCountriesService'

import { Country } from '@/types/country'
import { QuizQuestion } from '@/types/quiz'

import Loader from '@/components/Loader'
import Quiz from '@/components/Quiz'
import ServiceError from '@/components/ServiceError'

import { shuffle } from '@/utils/array'

const CapitalQuiz: React.FC = () => {
  const { countries, loadAll, loading, error } = useCountriesService()

  useEffect(() => {
    loadAll()
  }, [])

  const questions = useMemo<QuizQuestion[] | undefined>(() => {
    if (countries) {
      return shuffle<Country>(countries)
        .slice(0, 10)
        .map((item) => {
          let answers: string[] = []
          const randomCountries = shuffle<Country>(countries)

          let i = 0
          while (answers.length < 3) {
            const randomCountry = randomCountries[i]

            if (!randomCountry.cca2 || !item.cca2 || !randomCountry.capital[0]) {
              continue
            }

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
      {questions && <Quiz title="Capital cities" questions={questions} onPlayAgain={loadAll} />}
    </div>
  )
}

export default CapitalQuiz
