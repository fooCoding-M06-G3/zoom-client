import React, { useState, useEffect } from 'react';
import { Fab, Button, Typography, TextField, Select, option, InputLabel, FormControl } from '@material-ui/core';
import { ValidatorForm } from 'react-material-ui-form-validator';
import { makeStyles } from '@material-ui/core/styles';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },

  title: {
    margin: '25px',
    fontSize: '25px',
  },
  submitButton: {
    margin: '40px',
    backgroundColor: '#005b96',
    color: 'white',
    '&:hover': {
      backgroundColor: '#FFFFFF',
      color: '#000',
      border: '1px solid #03396c'
    }
  },
  image: {
    padding: 5,
    marginLeft: 5
  },
  category: {
    width: '100% ',
    height: 50,
    fontSize: 15,
    marginLeft: 9
  },
  preview: {
    height: 70,
    width: 90,
    padding: 0
  }

}));

export default function PostItemComponent() {


  const [values, setValues] = useState({
    productId: '',
    selectedCategory: '',
    selectedCity: '',
    userId: '',
    title: '',
    price: '',
    description: '',
    image: '',
    city: '',
    sold: false,
  });

  const [categories, setCategories] = useState([])
  const [cities, setCities] = useState([])
  const [images, setImages] = useState({
    images: [],
    url: []
  })

  const fetchCategories = () => {
    fetch('/getCategories')
      .then(resp => resp.json())
      .then(data => {
        setCategories(data)

      })
  }

  const fetchCities = () => {
    fetch('/getCities')
      .then(resp => resp.json())
      .then(data => {
        setCities(data)

      })
  }

  useEffect(() => {
    fetchCategories();
    fetchCities()


  }, [])

  const handleOnChange = event => {

    const { id, value } = event.target;
    let newValues = { ...values, [id]: value };
    setValues(newValues);


  };

  const handleImageChange = event => {

    setImages({ url: [...images.url, URL.createObjectURL(event.target.files[0])], images: [...images.images, event.target.files[0]] })

  }
  const handleSubmit = event => {
    event.preventDefault();

    const image = images.images.map(image => image);

    const data = new FormData();
    data.append('image', image[0])
    data.append('image', image[1])
    data.append('image', image[2])
    data.append('image', image[3])
    data.append('image', image[4])
    data.append('title', values.title)
    data.append('price', values.price)
    data.append('category', values.selectedCategory)
    data.append('city', values.selectedCity)
    data.append('description', values.description)

    axios.post('/postitem', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(resp => resp.json())


  };


  const classes = useStyles();

  return (

    <div style={{
      width: '50%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#FFF'
    }}>
      <div style={{
        marginTop: '10vh', width: '50%', marginLeft: 10
      }}>

        <ValidatorForm className={classes.root} onSubmit={event => handleSubmit(event)} >

          <Typography variant='h5' style={{ textAlign: 'left', marginBottom: 20, paddingTop: 10, marginLeft: 10 }}>Place your ad</Typography>


          <TextField
            variant='outlined'
            type='text'
            id='title'
            label='Title'
            value={values.title}
            onChange={handleOnChange}
            validators={['required']}
            errorMessages={['this field is required']}
          >
          </TextField>
          <br />
          <select
            className={classes.category}
            variant='outlined'
            id="selectedCategory"
            select
            value={values.selectedCategory}
            onChange={handleOnChange} >
            <option value='' >Select Category </option>
            {categories.map((category, i) => {
              return <option value={category.categoryname} key={i}>{category.categoryname}</option>
            })}

          </select>
          <br />
          <TextField
            variant='outlined'
            type='text'
            id='price'
            label='Price'
            value={values.price}
            onChange={handleOnChange}
            validators={['required']}
            errorMessages={['this field is required']}
          >
          </TextField>
          <br />
          <select
            className={classes.category}
            variant='outlined'
            id="selectedCity"
            select
            value={values.selectedCity}
            onChange={handleOnChange} >
            <option value='' >Select Place </option>
            {cities.map((city, i) => {
              return <option value={city.cityname} key={i}>{city.cityname}</option>
            })}

          </select>
          <br />

          <InputLabel style={{ textAlign: 'left', marginTop: 20, marginLeft: 10 }} >Pictures</InputLabel>

          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>

            <br />
            <div className={classes.image}>
              {images.url[0] !== undefined ? <img src={images.url[0]} alt='preview' className={classes.preview} /> :
                <label htmlFor="upload-photo">
                  <TextField
                    style={{ display: 'none' }}
                    id="upload-photo"
                    type="file"
                    elevation={0}
                    onChange={handleImageChange}
                    multiple
                  />
                  <Fab component="span" aria-label="add" > <AddAPhotoIcon /></Fab>
                </label>
              }
            </div>
            <div className={classes.image}>
              {images.url[1] !== undefined ?
                <img src={images.url[1]} alt='preview' className={classes.preview} /> :
                <label htmlFor="upload-photo">
                  <TextField
                    style={{ display: 'none' }}
                    id="upload-photo"
                    type="file"
                    elevation={0}
                    onChange={handleImageChange}
                  />
                  <Fab component="span" aria-label="add" > <AddAPhotoIcon /></Fab>
                </label>
              }
            </div>
            <div className={classes.image}>
              {images.url[2] !== undefined ? <img src={images.url[2]} alt='preview' className={classes.preview} /> :
                <label htmlFor="upload-photo">
                  <TextField
                    style={{ display: 'none' }}
                    id="upload-photo"
                    type="file"
                    elevation={0}
                    onChange={handleImageChange}
                  />
                  <Fab component="span" aria-label="add" > <AddAPhotoIcon /></Fab>
                </label>
              }
            </div>
            <div className={classes.image}>
              {images.url[3] !== undefined ? <img src={images.url[3]} alt='preview' className={classes.preview} /> :
                <label htmlFor="upload-photo">
                  <TextField
                    style={{ display: 'none' }}
                    id="upload-photo"
                    type="file"
                    elevation={0}
                    onChange={handleImageChange}
                  />
                  <Fab component="span" aria-label="add" > <AddAPhotoIcon /></Fab>
                </label>
              }
            </div>
            <div className={classes.image}>
              {images.url[4] !== undefined ? <img src={images.url[4]} alt='preview' className={classes.preview} /> :
                <label htmlFor="upload-photo">
                  <TextField
                    style={{ display: 'none' }}
                    id="upload-photo"
                    type="file"
                    elevation={0}
                    onChange={handleImageChange}
                  />
                  <Fab component="span" aria-label="add" > <AddAPhotoIcon /></Fab>
                </label>
              }
            </div>



          </div>

          <br />
          <TextField
            variant='outlined'
            multiline={true}
            rows='10'
            type='text'
            id='description'
            placeholder='Description'
            value={values.description}
            onChange={handleOnChange}
            validators={['required']}
            errorMessages={['this field is required']}
          >
          </TextField>
          <br />
          <Button type="submit" variant="filled outlined" className={classes.submitButton}>
            Post Ad
          </Button>
        </ValidatorForm >
      </div >
    </div >
  );
}