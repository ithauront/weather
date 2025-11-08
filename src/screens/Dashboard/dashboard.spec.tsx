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
        
       
        expect(await screen.findByText(/rio do sul/i)).toBeTruthy();
        expect(await screen.findByText(/Céu limpo/i)).toBeTruthy();
        

    },1500)

test('if can show another city selected weather', async () => {
  jest.spyOn(api, 'get')
    .mockResolvedValueOnce({ data: mockWeatherAPIResponse })
    .mockResolvedValueOnce({ data: mockCityApiResponse })
    .mockResolvedValueOnce({ data: mockWeatherAPIResponse });

  render(<Dashboard />);

  await waitForElementToBeRemoved(() => screen.getByTestId('loading'));

  const cityName = 'São Paulo';

  const search = await screen.findByTestId('search-input');
  fireEvent.changeText(search, cityName);

  const cityOption = await screen.findByText(cityName, { exact: false });
  fireEvent.press(cityOption);

  expect(await screen.findByText(/são paulo/i)).toBeTruthy();
  expect(await screen.findByText(/Céu limpo/i)).toBeTruthy();
});

})