import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Card, CardContent, Typography, Button, CardMedia } from '@material-ui/core';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';

export default function AdminScreen() {

  const [items, setItems] = useState([]);
  const [error, setError] = useState(true);



  useEffect(() => {
    fetch(`https://api-zoom.herokuapp.com/getitemsbyuserid?id=${localStorage.getItem('userId')}`)
      .then(response => response.json())
      .then(products => {
        setItems(products);
      });
  }, []);

  useEffect(() => {
    fetch(`https://api-zoom.herokuapp.com/getitemsbyuserid?id=${localStorage.getItem('userId')}`)
      .then(response => response.json())
      .then(products => {
        setItems(products);
      });
  }, [error]);


  const handleDelete = (e, id, images) => {
    fetch(`https://api-zoom.herokuapp.com/deleteUserItem?id=${id}`, {
      method: 'DELETE',
      body: JSON.stringify(images),
      headers: { 'Content-Type': 'application/json', }
    })
      .then(res => res.json())
      .then(result => {
        console.log(result)
        if (result.message !== 'error') {
          setError(!error)
        }
      }
      )
  }
  console.log(items.length)

  return (

    localStorage.getItem('userId') === null ? <Redirect to='/signin' /> :
      <>
        <div style={{ marginTop: '5vh', width: '50%', marginLeft: '25%', display: 'flex', justifyContent: 'flex-start' }}>
          <Typography >Manage Your Ads</Typography><Link to='postitem' style={{ marginLeft: 20 }} ><AddBoxOutlinedIcon />  Add New </Link>
        </div>
        <div style={{ width: '50%', marginLeft: '25%', minHeight: '73vh', backgroundColor: 'white', paddingTop: '50px' }}>
          {items.length === 0 ? <Typography>No Ads found</Typography> :

            items.map(item => {
              const images = [item.imageurl_1, item.imageurl_2, item.imageurl_3, item.imageurl_4, item.imageurl_5];
              console.log(item.imageurl_1)
              return (
                <div style={{ display: 'flex', marginBottom: 20, }}>
                  <Card style={{ width: '90%', height: '15vh', marginLeft: '5%', display: 'flex' }}>
                    <CardMedia
                      style={{
                        height: '15vh',
                        width: '25%',
                      }}
                      image={item.imageurl_1} />
                    <CardContent style={{
                      height: '15vh',
                      width: '20%',
                    }}>
                      <Typography>Title</Typography>
                      <br />
                      <Typography>{item.title}</Typography>
                    </CardContent>
                    <CardContent>
                      <Typography>Price</Typography>
                      <br />
                      <Typography>{item.price}</Typography>
                    </CardContent>
                    <CardContent style={{
                      padding: 'auto',
                      width: '20%',
                      display: 'flex',
                      marginLeft: '10%',
                      justifyContent: 'space-between'
                    }}>
                      <Button style={{ margin: 'auto' }} variant="contained" color='secondary'>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to={{ pathname: `/editpost`, state: { id: item.productid } }} > Edit </Link>
                      </Button>
                      <Button style={{ marginLeft: 20, marginTop: 'auto', marginBottom: 'auto' }} onClick={(e) => handleDelete(e, item.productid, images)} variant="contained" color='secondary'> Delete</Button>
                    </CardContent>
                  </Card>
                </div>
              )
            })

          }
        </div>
      </>
  )
}

