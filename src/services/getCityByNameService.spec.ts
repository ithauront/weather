import { mockCityApiResponse } from "@__tests__/mocks/api/mockCityApiResponse"
import { api } from "./api"
import { getCityByNameService } from "./getCityByNameService"

describe('Service: getCityByNameService', ()=>{
    test('if return city info', async ()=>{
    
        jest.spyOn(api, 'get').mockResolvedValue({data: mockCityApiResponse})

       const response = await getCityByNameService('São Paulo')

       expect(response[0].name).toEqual('São Paulo, BR')
       expect(response[0].latitude).toEqual(123)
    })

})