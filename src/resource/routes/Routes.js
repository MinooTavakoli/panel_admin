import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Calendar from '../calendar/Calendar';
import Charts from '../charts/Charts';
import Buttons from '../pages/buttons/Buttons';
import GridSystem from '../components/gridSystem/GridSystem';
import Icons from '../components/icons/Icons';
import Notifications from '../components/notifications/Notifications';
import Panels from '../components/panels/Panels';
import SweetAlert from '../components/sweetAlert/SweetAlert';
import Typography from '../components/typography/Typography';
import Dashboard from '../dashboard/Dashboard';
import ExtendedForms from '../forms/extended/ExtendedForms';
import RegularForms from '../forms/regular/RegularForms';
import ValidationForms from '../forms/validation/ValidationForms';
import Wizard from '../forms/wizard/Wizard';
import FullScreenMap from '../maps/fullscreenMap/FullScreenMap';
import GoogleMaps from '../maps/googleMaps/GoogleMaps';
import VectorMap from '../maps/vectorMap/VectorMap';
import Login from '../pages/auth/login/Login';
import Register from '../pages/auth/register/Register';
import LockScreen from '../pages/lockScreen/LockScreen';
import Pricing from '../pages/pricing/Pricing';
import RTLSupport from '../pages/RTLsupport/RTLSupport';
import Timeline from '../pages/timeline/Timeline';
import UserProfile from '../pages/userProfile/UserProfile';
import ExtendedTables from '../tables/extended/ExtendedTables';
import ReactTables from '../tables/react/ReactTables';
import RegularTables from '../tables/regular/RegularTables';
import Widgets from '../widgets/Widgets';

function Routers() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/rtl/rtl-support" element={<RTLSupport />} />
                <Route path="/timeline" element={<Timeline />} />
                <Route path="/register" element={<Register />} />
                <Route path="/lock-screen" element={<LockScreen />} />
                <Route path="/user-profile" element={<UserProfile />} />
                <Route path="/buttons" element={<Buttons />} />
                <Route path="/grid-system" element={<GridSystem />} />
                <Route path="/panels" element={<Panels />} />
                <Route path="/sweet-alert" element={<SweetAlert />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/icons" element={<Icons />} />
                <Route path="/typography" element={<Typography />} />
                <Route path="/extended-forms" element={<ExtendedForms />} />
                <Route path="/regular-forms" element={<RegularForms />} />
                <Route path="/validation-forms" element={<ValidationForms />} />
                <Route path="/wizard-forms" element={<Wizard />} />
                <Route path="/extended-tables" element={<ExtendedTables />} />
                <Route path="/react-tables" element={<ReactTables />} />
                <Route path="/regular-tables" element={<RegularTables />} />
                <Route path="/full-screen-map" element={<FullScreenMap />} />
                <Route path="/google-maps" element={<GoogleMaps />} />
                <Route path="/vector-maps" element={<VectorMap />} />
                <Route path="/widgets" element={<Widgets />} />
                <Route path="/charts" element={<Charts />} />
                <Route path="/calendar" element={<Calendar />} />
            </Routes>
        </Router>
    )
}

export default Routers