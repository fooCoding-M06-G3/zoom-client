import React, { useState, useEffect } from 'react';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import MenuItem from '@material-ui/core/MenuItem';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles(theme => ({
  container: {
    maxWidth: 200,
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginRight: theme.spacing(60),

    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  emphasis: { color: grey[500] },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const SelectCategories = props => {
  const [Categories, setCategories] = useState([]);
  const classes = useStyles();
  const theme = useTheme();
  useEffect(() => {
    fetch('/getCategories')
      .then(response => response.json())
      .then(Categories => {
        let newCategories = Categories.map(Categories => Categories.Categoriesname);
        setCategories(newCategories);
      });
  }, []);

  const handleChange = event => {
    const values = event.target.value;
    console.log(values);
    props.onChange(values);
  };

  const getStyles = (item, name, theme) => {
    return {
      fontWeight:
        name.indexOf(item) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  };

  return (
    <div>
      
      
        <Select
          multiple
          displayEmpty
          value={props.selectedCategories}
          onChange={handleChange}
          renderValue={selected => {
            if (selected.length === 0) {
              return <em className={classes.emphasis}>Select Categories..</em>;
            }
            return selected.join(', ');
          }}
          MenuProps={MenuProps}
        >
          <MenuItem disabled value="">
            <p>Categories</p>
          </MenuItem>
          {Categories.map(item => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
     
    </div>
  );
};

export default SelectCategories;
