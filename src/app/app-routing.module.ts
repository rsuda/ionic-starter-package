import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'more',
    loadChildren: () => import('./more/more.module').then( m => m.MorePageModule)
  },
  {
    path: 'home-v1',
    loadChildren: () => import('./home-v1/home-v1.module').then( m => m.HomeV1PageModule)
  },
  {
    path: 'werner-points',
    loadChildren: () => import('./werner-points/werner-points.module').then( m => m.WernerPointsPageModule)
  },
  {
    path: 'leaderboard',
    loadChildren: () => import('./leaderboard/leaderboard.module').then( m => m.LeaderboardPageModule)
  },
  {
    path: 'pay',
    loadChildren: () => import('./pay/pay.module').then( m => m.PayPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'trip-details',
    loadChildren: () => import('./trip-details/trip-details.module').then( m => m.TripDetailsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'achievements',
    loadChildren: () => import('./achievements/achievements.module').then( m => m.AchievementsPageModule)
  },
  {
    path: 'home-v2',
    loadChildren: () => import('./home-v2/home-v2.module').then( m => m.HomeV2PageModule)
  },
  {
    path: 'current-job',
    loadChildren: () => import('./current-job/current-job.module').then( m => m.CurrentJobPageModule)
  },
  {
    path: 'past-job',
    loadChildren: () => import('./past-job/past-job.module').then( m => m.PastJobPageModule)
  },
  {
    path: 'employee-resources',
    loadChildren: () => import('./employee-resources/employee-resources.module').then( m => m.EmployeeResourcesPageModule)
  },
  {
    path: 'referral',
    loadChildren: () => import('./referral/referral.module').then( m => m.ReferralPageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'safety',
    loadChildren: () => import('./safety/safety.module').then( m => m.SafetyPageModule)
  },
  {
    path: 'driver-opportunities',
    loadChildren: () => import('./driver-opportunities/driver-opportunities.module').then( m => m.DriverOpportunitiesPageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'modal-points',
    loadChildren: () => import('./modal-points/modal-points.module').then( m => m.ModalPointsPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
