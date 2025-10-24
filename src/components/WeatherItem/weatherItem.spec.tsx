import { render, screen } from "@testing-library/react-native"
import { WeatherItem } from "."
import clearDay from '@assets/clear_day.svg'

describe('Component: WeatherItem', ()=>{
    test('if show title and value', ()=>{
        render(<WeatherItem 
            icon={clearDay} 
            title="Umidade do ar"
            value="81%"
            />)

        const title = screen.getByText('Umidade do ar')
        const value = screen.getByText('81%')

        expect(title).toBeTruthy()
        expect(value).toBeTruthy()
    })
})