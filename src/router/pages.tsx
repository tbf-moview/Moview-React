import {lazy} from "react";

export const Main = lazy(() => import('../pages/MainPage'))
export const ReviewWrite = lazy(() => import('../pages/review/WritePage'))
export const ReviewEdit = lazy(() => import('../pages/review/EditPage'))
export const ReviewSearch = lazy(() => import('../pages/review/SearchPage'))
export const ReviewDetail = lazy(() => import('../pages/review/DetailPage'))
export const ReviewMy = lazy(() => import('../pages/review/MyReviewPage'))
export const ReviewFollow = lazy(() => import('../pages/review/FollowPage'))
export const Setting = lazy(() => import('../pages/etc/SettingPage'))

