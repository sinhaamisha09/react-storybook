import React from 'react'
import Input from './Input'

export default{  //export  component and metadata
    title: 'Form/Input', //mandatory and unique
    component: Input
}

export const Medium = () =>  <Input size='medium' placeholder='Medium Size'/>
export const Small = () =>  <Input size='small' placeholder='Small Size'/>
export const Large = () =>  <Input size='large' placeholder='Large Size'/>