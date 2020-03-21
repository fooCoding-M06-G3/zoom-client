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
  const classes = useStyles();

  const [subCategory, setSubCategory] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  useEffect(() => {
    const request = fetch('/getSubCategories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ category: props.categoryid }),
    });
    request
      .then(response => response.json())
      .then(subcategories => {
        setSubCategory(subcategories);
      });
  }, []);

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
        <Select
          value="Sub Categories"
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value="Sub Categories">
            <em>Sub Categories</em>
          </MenuItem>
          {subCategory.map(item => (
            <MenuItem key={item.subcategoryid} value={item.subcategoryid}>
              {item.subcategoryname}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Fragment>
  );
};

export default SelectSubCategory;
