import React, { useEffect, useMemo } from 'react'

import { Country } from '@/types/country'
import { QuizQuestion } from '@/types/quiz'

import Loader from '@/components/Loader'
import Quiz from '@/components/Quiz'
import ServiceError from '@/components/ServiceError'

import { shuffle } from '@/utils/array'
import { fetchIndependentCountries } from '@/services/restcountries'
import useAsyncService from '@/hooks/useAsyncService'

const CapitalQuiz: React.FC = () => {
  const { pending, data: countries, error, request } = useAsyncService(fetchIndependentCountries)

  useEffect(() => {
    request()
  }, [])

  const questions = useMemo<QuizQuestion[] | undefined>(() => {
    if (countries) {
      // We pick 10 random countries
      const result = shuffle<Country>(countries)
        .slice(0, 10)
        .map((item) => {
          let answers: string[] = []
          // We generate a new list of random countries in order to create wrong answers for the question
          const randomCountries = shuffle<Country>(countries)

          // We loop through random countries until finding 3 countries suitable to fill out wrong answers
          let i = 0
          while (answers.length < 3) {
            const randomCountry = randomCountries[i]

            // We make sure the random country is different from the one currently set for "item" and have at least one capital
            if (randomCountry.cca2 !== item.cca2 && randomCountry.capital.length > 0) {
              answers.push(randomCountry.capital[0])
            }

            i = i + 1
          }

          const correctAnswer = item.capital[0]
          // We add the capital or current item as the correct answer in the answers list
          answers.push(correctAnswer)

          return {
            question: `Capital of ${item.name.common} ?`,
            // We shuffle answers so that correct answer's position is not predictable
            answers: shuffle<string>(answers),
            correctAnswer
          }
        })

      return result
    } else {
      return undefined
    }
  }, [countries])

  return (
    <div>
      <>
        {pending && <Loader />}
        {error && <ServiceError />}
        {questions && !pending && <Quiz title="Capital cities" questions={questions} onPlayAgain={request} />}
      </>
    </div>
  )
}

export default CapitalQuiz
