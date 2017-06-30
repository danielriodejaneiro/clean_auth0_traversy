import { ModuleWithProviders } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

const my_AppRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    }
];

export const my_AppRoutingProviders: any[] = [];
export const my_Routing: ModuleWithProviders = RouterModule.forRoot(my_AppRoutes);