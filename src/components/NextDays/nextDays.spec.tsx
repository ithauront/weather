import { render, screen } from "@testing-library/react-native"
import { NextDays } from "."
import clearDay from '@assets/clear_day.svg'

describe('Component:Next Days', ()=>{
    test('if can render next days', ()=>{
        render(<NextDays data={[
           {
            day:'18/07', 
            min:'30°c', 
            max:'34°c', 
            icon: clearDay, 
            weather:'Céu limpo'},
            {
            day:'19/07', 
            min:'25°c', 
            max:'28°c', 
            icon: clearDay, 
            weather:'Nublado'},
              {
            day:'20/07', 
            min:'30°c', 
            max:'34°c', 
            icon: clearDay, 
            weather:'Céu limpo'},
              {
            day:'21/07', 
            min:'10°c', 
            max:'15°c', 
            icon: clearDay, 
            weather:'Tempestade'},
              {
            day:'22/07', 
            min:'28°c', 
            max:'31°c', 
            icon: clearDay, 
            weather:'Céu limpo'},

        ]}/>)
        expect(screen.getByText('15°c')).toBeTruthy()
    })
})