import React from 'react'
import {CardDemos} from './ui/CardDemos';

export const Demos = () => {
  return (
    <div className='flex h_full align_center justify_evenly wrap' id='demos'>
        <CardDemos/>
        <CardDemos/>
        <CardDemos/>
    </div>
  )
}
