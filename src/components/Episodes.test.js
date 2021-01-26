import React from 'react';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Episodes from './Episodes';

const data = [
    {episode_name: 'Episode1', episode_id: "episode1"},
    {episode_name: 'Episode2', episode_id: "episode2"},
    {episode_name: 'Episode3', episode_id: "episode3"},
    {episode_name: 'Episode4', episode_id: "episode4"},
]

test('Renders Episodes without errors', ()=> {
    render(<Episodes episodes={[]}/>);
});

test('Renders change in Episodes correctly', ()=>{
    const { rerender } = render(<Episodes episodes={[]}/>);

    let episodeList = screen.queryAllByTestId('episode');
    expect(episodeList).toStrictEqual([]);
    expect(episodeList).toHaveLength(0);

    rerender(<Episodes episodes={data}/>);

    episodeList = screen.queryAllByTestId('episode');
    expect(episodeList).toHaveLength(4);
})