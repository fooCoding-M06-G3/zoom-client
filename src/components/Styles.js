import { fade, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({

  //Navbar
  navbar: {
    display: 'flex',
    height: '8vh',
  },
  // toolbarNavLinks: {
  //   display: 'flex',
  //   textAlign: 'left',
  //   flexDirection: 'row',
  //   marginLeft: '10%',
  //   width: '10%'

  // },
  menuitem: {
    "&:hover": {
      backgroundColor: 'white'
    },
  },

  title: {
    color: 'white'
  },
  titleText: {
    fontSize: '1.6em',
    fontStyle: 'bold',
    fontWeight: 800,
  },

  link: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '1.6em',

  },
  navLink: {
    textDecoration: 'none',
    color: '#FFF',
    fontSize: '1.2em',

  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    marginLeft: '20%',
    marginTop: 'auto',
    marginBottom: 'auto',
    width: '50%',

  },
  searchIcon: {
    paddingLeft: 20,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: 10,
    width: '100%',
    height: '5vh',
    color: 'secondary'

  },
  icon: {
    height: '100%',
  },

  //Home Page
  homeCard: {
    marginLeft: '5vw',
    width: '90vw',
    minHeight: 500
  },
  homeImage: {
    minHeight: 500,
    minWidth: '100%',
    objectFit: 'cover'
  },
  //Popular Card
  popular: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignContent: 'space-arond',
    alignItems: 'center',
    width: '90vw',
    margin: 'auto',
  },
  //Products Page
  products: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignContent: 'space-arond',
    alignItems: 'center',
    width: '90%',
    margin: 'auto',
  },
  productCard: {
    marginTop: '10px',
    marginBottom: '10px',
    marginLeft: '3px',
    marginRight: '3px',
    width: '21vw',
    minHeight: '15%',
    "&:hover": {
      boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
    },
  },
  cardContent: {
    marginTop: 5,
    display: 'flex',
    justifyContent: 'space-between'
  },
  cardMedia: {
    minHeight: 420,
    width: '100%',
    objectFit: 'contain',
    padding: 5
  },
  cardDetail: {
    textDecoration: 'none',
  },
  //Product Details
  productDetails: {
    marginLeft: '10vw',
    width: '80vw',
    marginTop: '10vh',
    display: 'flex',
    justifyContent: 'center',
  },
  detailsImageCard: {
    width: '60%',
    display: 'flex',
    padding: '10px',
    minHeight: '40%'
  },
  detailImage: {
    minWidth: '100%',
    backgroundColor: '#CCC',
    padding: '10px',
    minHeight: 550
  },
  detailsText: {
    textAlign: 'left',
    width: '38%',
    minHeight: 450,
    marginLeft: 50,
  },
  detailsPrice: {
    color: 'red'
  },

  //shoppingbagScreen


  //Footer


  footer: {
    height: '20vh',
    margin: '10vh auto 0',
    width: '100vw',
    backgroundColor: '#303030',
    color: 'white'
  },
  footerBottom: {
    backgroundColor: '#000000'
  },
}));

export default useStyles;