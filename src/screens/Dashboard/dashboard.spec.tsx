import { act, fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from "@__tests__/utils/customRender"
import { Dashboard } from "."
import { api } from "@services/api"
import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherApiResponse"
import { mockCityApiResponse } from "@__tests__/mocks/api/mockCityApiResponse"
import { saveStorageCity } from "@libs/asyncStorage/cityStorage"

describe('Screen: Dashboard', ()=>{
          const city = {
            id: '1',
            name: 'Rio do Sul, BR',
            latitude: 123,
            longitude: 456
        }

        beforeAll(async()=>{
            await saveStorageCity(city)
        })

    test('if show city wheater', async()=>{
        jest.spyOn(api, 'get').mockResolvedValue({data: mockWeatherAPIResponse})

   


        render(<Dashboard />)
        
        await waitFor(()=> expect(screen.findByText(/rio do sul/i)).toBeTruthy())
        await waitFor(()=> expect(screen.findByText(/Céu limpo/i)).toBeTruthy()) 
        

    })

    test('if can show another city selected weather', async()=>{

        jest.spyOn(api, 'get')
        .mockResolvedValueOnce({data: mockWeatherAPIResponse})
        .mockResolvedValueOnce({data: mockCityApiResponse})
        .mockResolvedValueOnce({data: mockWeatherAPIResponse})

       render(<Dashboard />)

        await waitForElementToBeRemoved(()=>screen.getByTestId('loading'))

        const cityName = 'São Paulo'

        await waitFor(()=>act(()=>{
            const search = screen.getByTestId('search-input')
            fireEvent.changeText(search, cityName)
        }))

        await waitFor(()=>act(()=>{
            fireEvent.press(screen.getByText(cityName, {exact: false}))
        }))

        const newCity = await screen.findByText(/são paulo/i)
        const forecast = await screen.findByText(/Céu limpo/i)

        expect(newCity).toBeTruthy()
        expect(forecast).toBeTruthy()

    })

})