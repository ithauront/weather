import { CityProps } from "@services/getCityByNameService"
import { getStorageCity, removeStorageCity, saveStorageCity } from "./cityStorage"

describe('Storage: cityStorage', ()=>{
         const newCity:CityProps = {
            id: '1',
            name: 'São Paulo',
            latitude: 123,
            longitude: 456
        }
    test('if return null whe dont have a city storaged', async ()=>{
        const response = await getStorageCity()
        expect(response).toBeNull()

    })

    test('if return a city storaged', async()=>{
       
        await saveStorageCity(newCity)
        const response = await getStorageCity()
       
       expect(response).toEqual(newCity)

    })

    test('if can remove city storaged', async()=>{
     
        await saveStorageCity(newCity)

        await removeStorageCity()

        const response = await getStorageCity()
        expect(response).toBeNull()
    })
})