import { createRouter, createWebHistory } from 'vue-router'
import PublicLayout from '../views/PublicLayout.vue'
import HomeView from '../views/home/Index.vue'
import Register from '../views/register/Index.vue'
import Login from '../views/login/Index.vue'
import SelectEvent from '../views/register/SelectEvent.vue'
import Payment from '../views/payment/Index.vue'
import Schedule from '../views/schedule/Index.vue'
import Speakers from '../views/speakers/Index.vue'
import Guidance from '../views/guidance/Index.vue'
import Plataran from '../views/guidance/Plataran.vue'
import Venue from '../views/venue/Index.vue'
import AbstractGuide from '../views/abstracts/Guide.vue'
import Corlimpiade from '../views/corlimpiade/Index.vue'
import Abstracts from '../views/abstracts/Index.vue'
import AbstractsShow from '../views/abstracts/Show.vue'
import CheckTransaction from '../views/check_transaction/Index.vue'
import ContactUs from '../views/contact-us/Index.vue'
import PrivacyPolicy from '../views/privacy-policy/Index.vue'
import TermsConditions from '../views/terms-conditions/Index.vue'

import Profile from '../views/profile/Index.vue'
import Events from '../views/events/Index.vue'
import ProfileInfo from '../views/profile/Info.vue'
import ProfileEvents from '../views/profile/Events.vue'
import ProfileTransactions from '../views/profile/Transactions.vue'
import ProfileAbstracts from '../views/profile/Abstracts.vue'
import Committee from '../views/committee/Index.vue'
import Logas from '../views/logas/Index.vue'
import ForgotPassword from '../views/login/ForgotPassword.vue'
import ResetPassword from '../views/login/ResetPassword.vue'
import Videos from '../views/videos/Index.vue'
import { applyRouteMeta } from '../utils/seo'

const SITE_TITLE = 'Jogja Cardiology Update 2026'
const SITE_DESCRIPTION = 'Jogja Cardiology Update 2026: Integrated Approaches in Contemporary Cardiovascular Care. Held at Royal Ambarrukmo Hotel, Yogyakarta on 1-3 October 2026, in conjunction with the 9th JINCARTOS and 6th Intension Summit.'

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
					meta: {
						title: SITE_TITLE,
						description: SITE_DESCRIPTION,
						prerender: true,
					},
				},
				{
					path: '/events',
					name: 'events',
					component: Events,
					meta: {
						title: `Events | ${SITE_TITLE}`,
						description: 'Explore the scientific sessions, workshops, and satellite events at Jogja Cardiology Update 2026, 1-3 October 2026 in Yogyakarta.',
						prerender: true,
					},
				},
				{
					path: '/register',
					name: 'register',
					component: Register,
					meta: {
						title: `Registration | ${SITE_TITLE}`,
						description: 'Register for Jogja Cardiology Update 2026 at Royal Ambarrukmo Hotel, Yogyakarta, 1-3 October 2026. Secure your seat at JCU 2026, JINCARTOS, and Intension Summit.',
						prerender: true,
					},
				},
				{
					path: '/contact-us',
					name: 'contact-us',
					component: ContactUs,
					meta: {
						title: `Contact Us | ${SITE_TITLE}`,
						description: 'Get in touch with the Jogja Cardiology Update 2026 organizing committee for registration, sponsorship, and general inquiries.',
						prerender: true,
					},
				},
				{
					path: '/privacy-policy',
					name: 'privacy-policy',
					component: PrivacyPolicy,
					meta: {
						title: `Privacy Policy | ${SITE_TITLE}`,
						description: 'Privacy policy for the Jogja Cardiology Update 2026 website and registration platform.',
						prerender: true,
					},
				},
				{
					path: '/terms-conditions',
					name: 'terms-conditions',
					component: TermsConditions,
					meta: {
						title: `Terms & Conditions | ${SITE_TITLE}`,
						description: 'Terms and conditions for registration and participation in Jogja Cardiology Update 2026.',
						prerender: true,
					},
				},
				{
					path: '/guidance',
					name: 'guidance',
					component: Guidance,
					meta: {
						title: `Guidance | ${SITE_TITLE}`,
						description: 'Guidance and practical information for attendees of Jogja Cardiology Update 2026, Royal Ambarrukmo Hotel, Yogyakarta.',
						prerender: true,
					},
				},
				{
					path: '/plataran',
					name: 'plataran',
					component: Plataran,
					meta: {
						title: `Plataran Sehat Registration | ${SITE_TITLE}`,
						description: 'Registration information for the Plataran Sehat event at Jogja Cardiology Update 2026.',
						prerender: true,
					},
				},
				{
					path: '/corlimpiade',
					name: 'corlimpiade',
					component: Corlimpiade,
					meta: {
						title: `CORLIMPIADE | ${SITE_TITLE}`,
						description: 'CORLIMPIADE JCU 2026 — Cardiovascular Olympiad for General Practitioners and Medical Students. Register your team of 3 and get a 20% discount on JCU 2026 registration.',
						prerender: true,
					},
				},
				{
					path: '/login',
					name: 'login',
					component: Login,
					meta: {
						guard: 'guest',
						title: `Login | ${SITE_TITLE}`,
						noindex: true,
					}
				},
				{
					path: '/forgot-password',
					name: 'forgot-password',
					component: ForgotPassword,
					meta: {
						guard: 'guest',
						title: `Forgot Password | ${SITE_TITLE}`,
						noindex: true,
					}
				},
				{
					path: '/reset-password',
					name: 'reset-password',
					component: ResetPassword,
					meta: {
						guard: 'guest',
						title: `Reset Password | ${SITE_TITLE}`,
						noindex: true,
					}
				},
				{
					path: '/register/event',
					name: 'select-event',
					component: SelectEvent,
					meta: {
						title: `Select Event | ${SITE_TITLE}`,
						noindex: true,
					},
				},
				{
					path: '/payment',
					name: 'payment',
					component: Payment,
					meta: {
						title: `Payment | ${SITE_TITLE}`,
						noindex: true,
					},
				},
				{
					path: '/videos',
					name: 'videos',
					component: Videos,
					meta: {
						title: `Videos | ${SITE_TITLE}`,
						description: 'Watch videos from Jogja Cardiology Update 2026.',
						prerender: true,
					},
				},
				{
					path: '/schedule',
					name: 'schedule',
					component: Schedule,
					meta: {
						title: `Schedule | ${SITE_TITLE}`,
						description: 'View the full scientific programme and schedule for Jogja Cardiology Update 2026, Royal Ambarrukmo Hotel, Yogyakarta, 1-3 October 2026.',
						prerender: true,
					},
				},
				{
					path: '/committee',
					name: 'committee',
					component: Committee,
					meta: {
						title: `Committee | ${SITE_TITLE}`,
						description: 'Meet the organizing and scientific committee of Jogja Cardiology Update 2026.',
						prerender: true,
					},
				},
				{
					path: '/speakers',
					name: 'speakers',
					component: Speakers,
					meta: {
						title: `Speakers | ${SITE_TITLE}`,
						description: 'Meet the invited speakers of Jogja Cardiology Update 2026, Royal Ambarrukmo Hotel, Yogyakarta, 1-3 October 2026.',
						prerender: true,
					},
				},
				{
					path: '/venue',
					name: 'venue',
					component: Venue,
					meta: {
						title: `Venue | ${SITE_TITLE}`,
						description: 'Royal Ambarrukmo Hotel, Yogyakarta — official venue of Jogja Cardiology Update 2026, 1-3 October 2026.',
						prerender: true,
					},
				},
				{
					path: '/abstracts',
					name: 'abstracts',
					component: AbstractGuide,
					meta: {
						title: `Abstract Submission Guide | ${SITE_TITLE}`,
						description: 'Guidelines for submitting case report, research, meta-analysis, and systematic review abstracts to Jogja Cardiology Update 2026.',
						prerender: true,
					},
				},
				{
					path: '/posters',
					name: 'posters',
					component: Abstracts,
					meta: {
						title: `Poster Board | ${SITE_TITLE}`,
						description: 'Browse accepted case report, research, meta-analysis, and systematic review posters at Jogja Cardiology Update 2026.',
						prerender: true,
					},
				}, {
					path: '/posters/:id',
					name: 'poster detail',
					component: AbstractsShow,
					meta: {
						title: `Poster | ${SITE_TITLE}`,
						description: SITE_DESCRIPTION,
						prerender: true,
					},
				},
				{
					path: '/check_transaction',
					name: 'check_transaction',
					component: CheckTransaction,
					meta: {
						title: `Check Transaction | ${SITE_TITLE}`,
						noindex: true,
					},
				},
				{
					path: '/logas',
					name: 'logas',
					component: Logas,
					meta: {
						noindex: true,
					},
				},
				{
					path: '/profile',
					name: 'profile',
					component: Profile,
					meta: {
						title: `Profile | ${SITE_TITLE}`,
						noindex: true,
					},
					children: [
						{
							path: 'info',
							name: 'profile-info',
							component: ProfileInfo,
							meta: {
								title: `Profile | ${SITE_TITLE}`,
								noindex: true,
							},
						},
						{
							path: 'events',
							name: 'profile-events',
							component: ProfileEvents,
							meta: {
								title: `My Events | ${SITE_TITLE}`,
								noindex: true,
							},
						},
						{
							path: 'transactions',
							name: 'profile-transaction',
							component: ProfileTransactions,
							meta: {
								title: `My Transactions | ${SITE_TITLE}`,
								noindex: true,
							},
						},
						{
							path: 'abstracts',
							name: 'profile-abstracts',
							component: ProfileAbstracts,
							meta: {
								title: `My Abstracts | ${SITE_TITLE}`,
								noindex: true,
							},
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
		if (savedPosition) {
			return savedPosition
		}
		if (to.path !== from.path) {
			return { top: 0 }
		}
	}
})

router.beforeEach((to, from, next) => {
	let has_token = localStorage.getItem('perki_user_token')

	if (to.meta.guard === "guest" && has_token) {
		return next({ name: 'profile-info' })
	} else {
		return next()
	}
})

router.afterEach((to) => {
	applyRouteMeta(to.meta)
})

export default router
