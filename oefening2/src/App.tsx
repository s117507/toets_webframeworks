import { useState } from 'react'
import { Duckie } from './types'
import React from 'react';
import useSWR from 'swr';
import './App.css'



const fetcher = (url: string) => fetch(url).then(res => res.json());


function App() {
      const { data, error, mutate } = useSWR<Duckie>[]>('https://raw.githubusercontent.com/similonap/json/refs/heads/master/duckies/duckies.json', fetcher);

    if (!data) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  return (
        <div>
            <button onClick={() => mutate()}>Refetch</button>
            <ul>
                {data.map(duckie => (
                    <li key={duckie.id}>{duckie.url}{duckie.name}</li>
                ))}
            </ul>
        </div>
  )
}

export default App
