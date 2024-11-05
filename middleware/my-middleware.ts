// middleware/my-middleware.ts
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineNuxtRouteMiddleware((to, from) => {
  if (to.params.id === '1') {
    return abortNavigation();
  }
  // 실제 앱에서는 아마 모든 라우트를 `/`로 리디렉션하지 않을 것입니다.
  // 그러나 리디렉션하기 전에 `to.path`를 확인하는 것이 중요합니다.
  // 그렇지 않으면 무한 리디렉션 루프에 빠질 수 있습니다.
  if (to.path !== '/') {
    return navigateTo('/');
  }
});
