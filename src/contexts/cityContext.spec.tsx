import { useCity } from "@hooks/useCity"
import { act, renderHook, waitFor } from "@testing-library/react-native"
import { CityProvider } from "./CityContext"

describe('Context: CityContext', ()=>{
    test('if can change city', async ()=>{

      const {result} = renderHook(()=>useCity(), {wrapper: CityProvider})

        await waitFor(()=>act(()=>result.current.handleChanceCity({
            id: '1',
            name: 'Salvador',
            latitude: 123,
            longitude: 456
        })))

    expect(result.current.city?.name).toBe('Salvador')
    })
})