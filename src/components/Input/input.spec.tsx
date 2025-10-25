import {render, screen } from '@testing-library/react-native'
import { Input } from '.'

describe("Component: Input",()=>{
test("Should render without activity indicator",()=>{
   render(<Input />)
   const activityIndicator = screen.queryByTestId('activity-indicator')
    
   expect(activityIndicator).toBeNull()
})

test('if render with activity indicator',()=>{
    render(<Input isLoading/>)
   const activityIndicator = screen.getByTestId('activity-indicator')

   expect(activityIndicator).toBeTruthy()
})
})