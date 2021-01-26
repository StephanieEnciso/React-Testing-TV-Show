import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import {fetchShow as mockFetchShow} from './api/fetchShow';
import { act } from 'react-dom/test-utils';
import ReactDropdown from 'react-dropdown';

// jest.mock('./api/fetchShow');

test('Renders App without errors', () => {
    waitFor(() => {(<App/>); })
})

test('Renders season data when clicked', async() => {
    // mockFetchShow.mockResolvedValueOnce({
    //     data:[
    //         {episode_name: 'Episode1', episode_id: "episode1"},
    //         {episode_name: 'Episode1', episode_id: "episode1"}
    //     ]
    // });

//    waitFor(() => {(<App/>); });
   render(<App/>);
    
   const dropdown = await screen.findByText(/select a season/i);
   userEvent.click(dropdown);

    //  waitFor(() => {
    //      expect(screen.getByTestId('episode')).toHaveLength(2);
    //  })
})