import React, {lazy, Suspense, LazyExoticComponent} from 'react'
import {Redirect} from 'react-router-dom'
import Home from '../layouts/Home'

const SuspenseComponent = (Component: LazyExoticComponent<any>) => (props: any) => (
  <Suspense fallback={null}>
    <Component {...props} />
  </Suspense>
);

const Find = lazy(() => import("../views/find"));
const Video = lazy(() => import("../views/video"));
const Login = lazy(() => import("../views/login"));
const Mine = lazy(() => import("../views/mine"));
const DailyRecommendation = lazy(() => import("../views/dailyRecommendation"));
const SongList = lazy(() => import("../views/songList"));
const PlaylistPlaza = lazy(() => import("../views/playlistPlaza"));
const TopList = lazy(() => import("../views/topList"));
const Singer = lazy(() => import("../views/singer"));
const SingerDetail = lazy(() => import("../views/singerDetail"));
const VideoDetail = lazy(() => import("../views/video/detail"));

export const routes = [
  {
    path: '/',
    component: Home,
    routes: [
      {
        path: "/",
        exact: true,
        render: () => <Redirect to={"/find"}/>
      },
      {
        path: "/find",
        component: SuspenseComponent(Find),
        routes: [
          {
            path: "/find/:id",
          }
        ]
      },
      {
        path: "/video",
        component: SuspenseComponent(Video),
        routes: [
          {
            path: "/video",
          }
        ]
      },
      {
        path: "/videoDetail",
        component: SuspenseComponent(VideoDetail),
        routes: [
          {
            path: "/videoDetail",
          }
        ]
      },
      {
        path: "/login",
        component: SuspenseComponent(Login),
        routes: [
          {
            path: "/login",
          }
        ]
      },
      {
        path: "/mine",
        component: SuspenseComponent(Mine),
        routes: [
          {
            path: "/mine",
          }
        ]
      },
      {
        path: "/dailyRecommendation",
        component: SuspenseComponent(DailyRecommendation),
        routes: [
          {
            path: "/dailyRecommendation",
          }
        ]
      },
      {
        path: "/songList",
        component: SuspenseComponent(SongList),
        routes: [
          {
            path: "/songList",
          }
        ]
      },
      {
        path: "/playlistPlaza",
        component: SuspenseComponent(PlaylistPlaza),
        routes: [
          {
            path: "/playlistPlaza",
          }
        ]
      },
      {
        path: "/topList",
        component: SuspenseComponent(TopList),
        routes: [
          {
            path: "/topList",
          }
        ]
      },
      {
        path: "/singer",
        component: SuspenseComponent(Singer),
        routes: [
          {
            path: "/singer",
          }
        ]
      },
      {
        path: "/singerDetail",
        component: SuspenseComponent(SingerDetail),
        routes: [
          {
            path: "/singerDetail",
          }
        ]
      }
    ]
  },
];
