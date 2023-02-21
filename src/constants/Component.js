import Vendor from '../Layout/Vendor';
import Dashboard from './../Pages/Vendor/Dashboard/Dashboard.jsx'; 
import Users from './../Pages/Vendor/Users/Users'; 
import Navber from './../Components/Navber/Navber';
import Sildebar from './../Components/Sidebar/Sildebar';
import ButtonBase from './../Components/Button/ButtonBase';
import UsersTable from './../Pages/Vendor/Users/UsersTable';  
import SubNav from './../Components/Navber/SubNav';
import BaseHeader from './../Components/Header/BaseHeader'; 
import Summary from './../Pages/Vendor/Dashboard/Summary'; 
import ChartColumn from '../Pages/Vendor/Dashboard/ChartColumn';
import ChartLine from './../Pages/Vendor/Dashboard/ChartLine';//
import Auth from './../Layout/Auth';
import Login from './../Pages/auth/Login/Login';
import AddNewUser from '../Pages/Vendor/Users/AddUser/AddNewUser';
import Edit from './../Pages/Vendor/Users/Edit/Edit'; 

export default {
    // Layout 
    Vendor,
    Auth, 

    // Vendor Components User 1
    Dashboard,
    Summary,
    ChartColumn,
    ChartLine,
    AddNewUser,
    Users,
    UsersTable, 
    Edit, 

    // Auth
    Login,
 

    // Components
    Navber,
    SubNav,
    Sildebar, 
    ButtonBase,
    BaseHeader
}

