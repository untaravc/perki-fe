import {createRouter, createWebHistory} from 'vue-router'
import PublicLayout from '../views/PublicLayout.vue'
import HomeView from '../views/home/Index.vue'
import Register from '../views/register/Index.vue'
import Login from '../views/login/Index.vue'
import Profile from '../views/profile/Index.vue'
import ProfileInfo from '../views/profile/Info.vue'
import ProfileEvents from '../views/profile/Events.vue'
import ProfileTransactions from '../views/profile/Transactions.vue'
import SelectEvent from '../views/register/SelectEvent.vue'
import Payment from '../views/payment/Index.vue'
import Schedule from '../views/schedule/Index.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'layout',
			component: PublicLayout,
			children: [
				{
					path: '/',
					name: 'home',
					component: HomeView,
				},
				{
					path: '/register',
					name: 'register',
					component: Register,
				},
				{
					path: '/login',
					name: 'login',
					component: Login,
					meta: {
						guard: 'guest'
					}
				},
				{
					path: '/register/event',
					name: 'select-event',
					component: SelectEvent,
				},
				{
					path: '/payment',
					name: 'payment',
					component: Payment,
				},
				{
					path: '/schedule',
					name: 'schedule',
					component: Schedule,
				},
				{
					path: '/profile',
					name: 'profile',
					component: Profile,
					children: [
						{
							path: 'info',
							name: 'profile-info',
							component: ProfileInfo,
						},
						{
							path: 'events',
							name: 'profile-events',
							component: ProfileEvents,
						},
						{
							path: 'transactions',
							name: 'profile-transaction',
							component: ProfileTransactions,
						},
					]
				},
			]
		},
	]
})

router.beforeEach((to, from, next) => {
	let has_token = localStorage.getItem('perki_user_token')

	// if (to.meta.guard === "guest" && has_token) {
	// 	return next({name: 'profile-info'})
	// } else {
		return next()
	// }
})

export default router
