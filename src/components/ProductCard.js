import React from 'react'
import '../App.css';
import { Card, CardTitle, CardActions, } from 'react-mdl'

export default function ProductCard() {
  return (
    <Card shadow={0} style={{ width: '23%', height: '36vh', margin: '10px', }} >
      <CardTitle expand style={{ background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC' }} >
        <CardActions style={{ width: '30%', background: '#333', marginTop: '70%' }}>
          <span style={{ width: '100%', color: '#fff', padding: 5, fontSize: '1.4em', fontWeight: '500' }}>
            1099
          </span>
        </CardActions>
      </CardTitle>
      <div style={{ display: 'flex', height: '20%', width: '100%' }}>
        <span className='itemText' >
          Item Name
          </span>
        <span className='itemText'>
          City
          </span>
      </div>
    </Card>
  )
}
