import {createRouter, createWebHistory} from 'vue-router'
import PublicLayout from '../views/PublicLayout.vue'
import HomeView from '../views/home/Index.vue'
import Register from '../views/register/Index.vue'
import Login from '../views/login/Index.vue'
import SelectEvent from '../views/register/SelectEvent.vue'
import Payment from '../views/payment/Index.vue'
import Schedule from '../views/schedule/Index.vue'
import Speakers from '../views/speakers/Index.vue'
import Venue from '../views/venue/Index.vue'
import Abstracts from '../views/abstracts/Index.vue'
import CheckTransaction from '../views/check_transaction/Index.vue'
import ContactUs from '../views/contact-us/Index.vue'

import Profile from '../views/profile/Index.vue'
import ProfileInfo from '../views/profile/Info.vue'
import ProfileEvents from '../views/profile/Events.vue'
import ProfileTransactions from '../views/profile/Transactions.vue'
import ProfileAbstracts from '../views/profile/Abstracts.vue'
import Committee from '../views/committee/Index.vue'
import Logas from '../views/logas/Index.vue'

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
					path: '/contact-us',
					name: 'contact-us',
					component: ContactUs,
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
					path: '/committee',
					name: 'committee',
					component: Committee,
				},
				{
					path: '/speakers',
					name: 'speakers',
					component: Speakers,
				},
				{
					path: '/venue',
					name: 'venue',
					component: Venue,
				},
				{
					path: '/abstracts',
					name: 'abstracts',
					component: Abstracts,
				},
				{
					path: '/check_transaction',
					name: 'check_transaction',
					component: CheckTransaction,
				},
				{
					path: '/logas',
					name: 'logas',
					component: Logas,
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
						{
							path: 'abstracts',
							name: 'profile-abstracts',
							component: ProfileAbstracts,
						},
					]
				},
			]
		},
	],
	scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
			return {
				el: to.hash,
				behavior: 'smooth',
			}
		}
	}
})

router.beforeEach((to, from, next) => {
	let has_token = localStorage.getItem('perki_user_token')

	if (to.meta.guard === "guest" && has_token) {
		return next({name: 'profile-info'})
	} else {
		return next()
	}
})

export default router
