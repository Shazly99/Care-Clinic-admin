import Vendor from '../Layout/Vendor'; 
import Users from './../Pages/Vendor/Users/Users'; 
import Navber from './../Components/Navber/Navber';
import Sildebar from './../Components/Sidebar/Sildebar';
import ButtonBase from './../Components/Button/ButtonBase';
import UsersTable from './../Pages/Vendor/Users/UsersTable';  
import SubNav from './../Components/Navber/SubNav';
import BaseHeader from './../Components/Header/BaseHeader';  
import Auth from './../Layout/Auth';
import Login from './../Pages/auth/Login/Login';
import AddNewUser from '../Pages/Vendor/Users/AddUser/AddNewUser';
import Edit from './../Pages/Vendor/Users/Edit/Edit'; 

export default {
    // Layout 
    Vendor,
    Auth, 

    // Vendor Components User 1 
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

