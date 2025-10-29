import { render, screen, fireEvent, waitFor } from "@__tests__/utils/customRender"
import { Search } from "."
import { api } from "@services/api"
import { mockCityApiResponse } from "@__tests__/mocks/api/mockCityApiResponse"

describe('Screens:Search',()=>{
    test('if show city option', async ()=>{
        jest.spyOn(api, 'get').mockResolvedValue({data: mockCityApiResponse})
        render(<Search />)
        const input = screen.getByTestId('search-input')

        fireEvent.changeText(input, 'São Paulo')

        const option = await waitFor(()=>screen.findByText(/são paulo/i)) 
      
       expect(option).toBeTruthy()

    })
})