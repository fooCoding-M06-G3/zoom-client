import React, { Fragment, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import SubCategoryProductListScreen from '../../screens/SubCategoryProductListScreen';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SelectSubCategory = props => {
  console.log(props)
  const classes = useStyles();
  const [value, setValue] = useState(null);
  const [subCategory, setSubCategory] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      await fetchSubCategories();
    };
    fetchData();
  }, []);


  const fetchSubCategories = async () => {
    const response = await fetch('https://api-zoom.herokuapp.com/getsubcategories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ category: props.id }),
    });
    const json = await response.json();
    console.log(json)
    setSubCategory(json);
    setValue(json[0].sub_categoryid);
  };


  const handleChange = event => {
    setSelectedSubCategory(event.target.value);
  };
  if (selectedSubCategory) {
    return (
      <Redirect
        to={{
          pathname: '/subCategoryProductList',
          state: { selectedSubCategory: selectedSubCategory },
        }}
      />
    );
  }

  return (
    <Fragment>
      <FormControl className={classes.formControl}>
        <Select value={value} onChange={handleChange} autoFocus className={classes.selectEmpty}>
          {subCategory.map((item, i) => (
            <MenuItem key={i} value={item.sub_categoryid} selected>
              {item.sub_categoryname}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Fragment>
  );
};

export default SelectSubCategory;
