import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MUIDataTable from "mui-datatables";
import Customer from './Customer';


const useStyles = makeStyles(theme => ({
  table: {
    "& thead": {
      "& th": {
        backgroundColor: "#ADD8E6",
        fontWeight: "bold",
        fontSize: "15px",
        fontFamily: "Tahoma"
      }
    }
  } 
}));


export default function Contacts() {
  const classes = useStyles();
  const [isLoaded, setIsLoaded] = useState(false);
  const [userProfile, setUserProfile] = useState({
    records: {
      profiles: []
    }
  });

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://api.enye.tech/v1/challenge/records`);
      let data = await response.json();
      setUserProfile(data);
    })();
    
    setIsLoaded(true);
  }, []);


const columns = [
  {
    name: "S/N",
    options: {
      filter: false,
      sort: false,
      customBodyRender: (value, tableMeta) => {
        return (tableMeta.rowIndex) + 1
      }
    }
   },
   {
    name: "FirstName",
    label: "First Name",
    options: {
      filter: false,
      sort: true,
    }
  },
  {
    name: "LastName",
    label: "Last Name",
    options: {
      filter: false,
      sort: true,
    }
  },
  {
    name: "Gender",
    label: "Gender",
    options: {
      filter: true,
      sort: false,
    }
  },
  {
    name: "Email",
    label: "Email",
    options: {
      filter: false,
      sort: false,
    }
  },
  {
    name: "PaymentMethod",
    label: "Payment Method",
    options: {
      filter: true,
      sort: false,
    }
  },
];

const options = {
  filterType: 'dropdown',
  rowsPerPage: 20,
  rowsPerPageOptions: [],
  textLabels: {
    body: {
      noMatch: "Please wait...",
    },
  }
};

return (
  <div className={classes.div}>
    { !isLoaded ? <Customer /> : (
      <MUIDataTable className={classes.table}
        title={"Profile of Customers"}
        data={userProfile.records.profiles}
        columns={columns}
        options={options}
      />
    )}
  </div>
)};