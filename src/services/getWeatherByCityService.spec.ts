import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherApiResponse"
import { api } from "./api"
import { getWeatherByCityService } from "./getWeatherByCityService"

describe('Service: getWeatherByCityService', ()=>{
    test('if return wheater api data formated', async ()=>{
        jest.spyOn(api, 'get').mockResolvedValue({data: mockWeatherAPIResponse})

        const response = await getWeatherByCityService({latitude: 123, longitude: 456})

        expect(response).toHaveProperty('today')
    })
})