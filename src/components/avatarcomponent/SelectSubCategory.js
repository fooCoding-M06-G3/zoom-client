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
  const [value, setValue] = useState(null);
  const [subCategory, setSubCategory] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState('');

  const fetchSubCategories = async () => {
    const response = await fetch('/getSubCategories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ category: props.categoryid }),
    });
    const json = await response.json();
    setSubCategory(json);
    setValue(json[0].subcategoryid);
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchSubCategories();
    };
    fetchData();
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
        <Select value={value} onChange={handleChange} autoFocus className={classes.selectEmpty}>
          {subCategory.map(item => (
            <MenuItem key={item.subcategoryid} value={item.subcategoryid} selected>
              {item.subcategoryname}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Fragment>
  );
};

export default SelectSubCategory;
