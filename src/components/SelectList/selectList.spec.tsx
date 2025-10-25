import { fireEvent, render, screen } from "@testing-library/react-native"
import { SelectList } from "."

describe('Component: SelectList',()=>{
    test('if city selected return city details', ()=>{
        const data = [
            {id: '1', name: 'Campinas', latitude: 123, longitude: 456 },
            {id: '2', name: 'Campo Grande', latitude: 321, longitude: 654 }
        ]

        const onPress = jest.fn()

        render(<SelectList data={data} onChange={()=>{}} onPress={onPress} />)

        const selectedCity = screen.getByText(/campo/i)
        fireEvent.press(selectedCity)
        expect(onPress).toHaveBeenCalledWith(data[1])
    })

    test('if does not show options when data props is empty', ()=>{
        
        render(<SelectList data={[]} onChange={()=>{}} onPress={()=>{}} />)

        const options = screen.getByTestId('options')

        expect(options.children).toHaveLength(0)

    })
})