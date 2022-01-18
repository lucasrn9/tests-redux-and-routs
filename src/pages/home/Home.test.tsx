import { render,screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import userEvent from '@testing-library/user-event';
import rootReducer from "../../redux/reducers";
import Home from './Home'

describe('Home page tests',()=>{
    
    test("Checks if counter's initial value is 0",()=>{
    render(
    <Provider store={createStore(rootReducer)}>
        <Home />
    </Provider>
    )
    expect(screen.getByText('Counter: 0')).toBeInTheDocument()
    })

    test('Checks if decrement button is working',()=>{
    render(
        <Provider store={createStore(rootReducer)}>
        <Home />
        </Provider>
    )
    userEvent.click(screen.getByText('decrement'))
    expect(screen.getByText('Counter: -1')).toBeInTheDocument()
    userEvent.click(screen.getByText('decrement'))
    expect(screen.getByText('Counter: -2')).toBeInTheDocument()
    userEvent.click(screen.getByText('decrement'))
    expect(screen.getByText('Counter: -3')).toBeInTheDocument()
    })


    test('Checks if increment button is working',()=>{
        render(
            <Provider store={createStore(rootReducer)}>
            <Home />
            </Provider>
        )
        userEvent.click(screen.getByText('increment'))
        expect(screen.getByText('Counter: 1')).toBeInTheDocument()
        userEvent.click(screen.getByText('increment'))
        expect(screen.getByText('Counter: 2')).toBeInTheDocument()
        userEvent.click(screen.getByText('increment'))
        expect(screen.getByText('Counter: 3')).toBeInTheDocument()
        })
    
})