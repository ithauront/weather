import { act, render, screen, waitFor } from "@__tests__/utils/customRender"
import { Routes } from "."
import { saveStorageCity } from "@libs/asyncStorage/cityStorage"
import { api } from "@services/api"
import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherApiResponse"

describe('Routes', ()=>{
    test('if show Search screnn when no city is selected', async ()=>{
        render(<Routes/>)
        const title = await waitFor(()=>screen.findByText(/^escolha um local/i)) 
        expect(title).toBeTruthy()
    })

      test('if show dashboard when city is selected', async ()=>{
        jest.spyOn(api, 'get').mockResolvedValue({
            data: mockWeatherAPIResponse
        })
        const city = {
            id: '1',
            name: 'Salvador',
            latitude: 123,
            longitude: 456
        }
        await saveStorageCity(city)
         
        await waitFor(() => render(<Routes />));

        const title = await waitFor(() => screen.getByText(city.name));

        expect(title).toBeTruthy()

    })
})