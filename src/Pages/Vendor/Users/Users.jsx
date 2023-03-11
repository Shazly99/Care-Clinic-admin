import React, { useEffect, useState } from 'react'
import Component from '../../../constants/Component'
import './Users.scss'
import Icons from "../../../constants/Icons.js";
import { Pagination, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { GetData, PostData } from '../../../utils/fetchData';
import { apiheader } from './../../../utils/fetchData';

function Users() {
 
  return (
    <>
 
 <div className="welcome__page   bg-body  " style={{ display: 'flex ', justifyContent: 'center', alignItems: 'center' }}>
        <div className="title_bytrh shadow-lg rounded-3">
          <h3>Welcome to Dashboard Cure Clinic</h3>
        </div>
      </div>
    </>
  )
}

export default Users
