export default eventHandler(() => {
  // return 'hello Nuxt3 error page!';
  // return {
  //   message: 'hello nuxt3',
  // };
  throw createError({
    statusCode: 404,
    message: '페이지를 찾을 수 없습니다.',
  });
});
