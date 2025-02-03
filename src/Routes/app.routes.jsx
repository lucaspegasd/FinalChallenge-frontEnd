import { Routes, Route, Navigate } from 'react-router-dom';

import { Home } from '../pages/Home';
import { AdminHome } from '../pages/AdminHome';
import { Plate } from '../pages/Plate';
import { AdminPlate } from '../pages/AdminPlate';
import { EditPlate } from '../pages/EditPlate';
import { AddPlate } from '../pages/AddPlate';

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/admin" element={<AdminHome/>}/>
            <Route path="/plate/:id" element={<Plate/>}/>
            <Route path="/adminplate" element={<AdminPlate/>}/>
            <Route path="/edit/:card_id" element={<EditPlate/>}/>
            <Route path="/add" element={<AddPlate/>}/>

            <Route path="*" element={<Navigate to="/" />} />

        </Routes>
    )
}
